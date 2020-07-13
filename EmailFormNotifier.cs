using Microsoft.Extensions.Logging;
using ModuleDefinitions;
using System.Threading.Tasks;

namespace HiveExampleModule
{
    public class EmailFormNotifier : IFormNotifier
    {
        private ILogger _logger;

        public EmailFormNotifier(ILogger<EmailFormNotifier> logger)
        {
            _logger = logger;
        }

        public Task NotifyFormSubmitAsync(string notifyText)
        {
            // Normally we would send an email, but for demo purposes we just log the text.
            _logger.LogInformation(notifyText);

            return Task.CompletedTask;
        }
    }
}
