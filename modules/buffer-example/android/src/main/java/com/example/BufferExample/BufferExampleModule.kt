package com.example.BufferExample

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

const val PING = "ping"
const val PONG = "pong"

class BufferExampleModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("BufferExample")

    Events("pong")

    Function("ping") {
      return@Function PONG.toByteArray(Charsets.UTF_8)
    }

    AsyncFunction("pingAsync") {
      sendEvent(PONG, mapOf(
        "value" to PONG.toByteArray(Charsets.UTF_8)
      ))
    }
  }
}
