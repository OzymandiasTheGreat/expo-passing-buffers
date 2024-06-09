import ExpoModulesCore

let PING = "ping"
let PONG = "pong"

public class BufferExampleModule: Module {
  public func definition() -> ModuleDefinition {
    Name("BufferExample")

    Events("pong")

    Function("ping") {
      return PONG.data(using: .utf8)
    }

    AsyncFunction("pingAsync") {
      self.sendEvent(PONG, [
        "value": PONG.data(using: .utf8)
      ])
    }
  }
}
