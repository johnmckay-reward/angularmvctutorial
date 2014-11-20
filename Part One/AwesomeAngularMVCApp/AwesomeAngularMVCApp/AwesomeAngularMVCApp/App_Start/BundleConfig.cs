using System.Web.Optimization;

namespace AwesomeAngularMVCApp
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/AwesomeAngularMVCApp")
                .IncludeDirectory("~/Scripts/Controllers", "*.js")
                .IncludeDirectory("~/Scripts/Factories", "*.js")
                .Include("~/Scripts/AwesomeAngularMVCApp.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/site.css"));

            BundleTable.EnableOptimizations = true;
        }
    }
}