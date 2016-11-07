import Foundation
import Kitura
import HeliumLogger
import SwiftyJSON

HeliumLogger.use()

let router = Router()

//
//	Allow for serving up static files found in the public directory
//
router.all("/", middleware: StaticFileServer(path: "./public"))

//
// Read environment variables and look for port we should listen on
//
let envVars = ProcessInfo.processInfo.environment
let portString: String = envVars["PORT"] ?? envVars["CF_INSTANCE_PORT"] ??  envVars["VCAP_APP_PORT"] ?? "8090"
let port = Int(portString) ?? 8090

Kitura.addHTTPServer(onPort: port, with: router)
Kitura.run()
