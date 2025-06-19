"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { X } from "lucide-react"
import Image from "next/image"

interface LoginPageProps {
  onLogin: () => void
}

export function LoginPage({ onLogin }: LoginPageProps) {
  const [username, setUsername] = useState("ASFEGHEF")
  const [password, setPassword] = useState("**********")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onLogin()
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ background: "linear-gradient(135deg, #d4a574 0%, #c4958a 100%)" }}
    >
      <div className="bg-white rounded-lg shadow-2xl overflow-hidden max-w-2xl w-full mx-4">
        <div className="relative">
          <button className="absolute top-4 right-4 z-10 text-gray-600 hover:text-gray-800">
            <X className="w-6 h-6" />
          </button>

          <div className="relative h-80">
            <Image src="/images/blackyak-bg.png" alt="BLACKYAK Background" fill className="object-cover" />
            <div className="absolute top-4 left-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">B</span>
                </div>
                <span className="text-white font-bold text-xl">BLACKYAK</span>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-6">
            <form onSubmit={handleSubmit} className="flex items-end gap-4">
              <div className="flex-1">
                <Label htmlFor="username" className="text-white text-sm mb-1 block">
                  아이디 :
                </Label>
                <Input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="bg-white"
                />
              </div>
              <div className="flex-1">
                <Label htmlFor="password" className="text-white text-sm mb-1 block">
                  비밀번호 :
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-white"
                />
              </div>
              <Button type="submit" className="bg-red-600 hover:bg-red-700 text-white px-8 py-2 h-10">
                Login
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
