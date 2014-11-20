using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(AwesomeAngularMVCApp.Startup))]
namespace AwesomeAngularMVCApp
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
