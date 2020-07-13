using DevAttic.Hive.Definitions;
using HiveExampleModule;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using ModuleDefinitions.Services;

namespace DevAttic.HiveExampleModule.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MessageController : ControllerBase
    {
        private readonly ILogger _logger;
        private readonly IUserService _userService;
        private readonly AppOptions _options;

        public MessageController(ILogger<MessageController> logger, IAppService<IUserService> userService, IOptionsMonitor<AppOptions> options)
        {
            _logger = logger;
            _userService = userService.Instance;
            _options = options.CurrentValue;
        }

        public ActionResult<string> GetMessage()
        {
            return "Response from external module controller";
        }

        [HttpGet("users")]
        public string[] GetUsers()
        {
            var users = _userService.GetUsers();

            return users;
        }
    }
}
