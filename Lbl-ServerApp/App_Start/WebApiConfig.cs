using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Net.Http.Formatting;
using System.Runtime.Serialization;
using System.Web.Http.Cors;
using Newtonsoft.Json.Serialization;

namespace Lbl_ServerApp
{
    public static class WebApiConfig
    {
        

        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services
             ICorsPolicyProvider policy=new EnableCorsAttribute("*","*","*");
            config.EnableCors(policy);

            config.Formatters.Clear();
            config.Formatters.Add(new JsonMediaTypeFormatter());
            config.Formatters.JsonFormatter.SerializerSettings.ContractResolver =
                new CamelCasePropertyNamesContractResolver();

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
        }
    }
}
