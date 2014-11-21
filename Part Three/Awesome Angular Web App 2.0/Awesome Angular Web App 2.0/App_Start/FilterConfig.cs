using System.Web;
using System.Web.Mvc;

namespace Awesome_Angular_Web_App_2._0
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
