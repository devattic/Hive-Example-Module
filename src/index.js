import Button from "./components/Button/Button";
import moduleRoute from "./routes/moduleRoute";

class Plugin {
  components = [Button];

  routes = [
    {
      path: "/moduleRoute",
      title: "Module Route",
      component: moduleRoute,
    },
  ];

  init() {
    console.log("This is getting logged from your plugin.");
  }
}

export default Plugin;
