"use client"

import { useState } from "react"
import { LoginPage } from "@/components/login-page"
import { MainDashboard } from "@/components/main-dashboard"
import { SalesManagement } from "@/components/sales-management"
import { MDIPage } from "@/components/mdi-page"

export default function App() {
  const [currentPage, setCurrentPage] = useState<"login" | "dashboard" | "sales" | "mdi">("login")
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = () => {
    setIsLoggedIn(true)
    setCurrentPage("dashboard")
  }

  const handleNavigation = (page: "dashboard" | "sales" | "mdi") => {
    if (isLoggedIn) {
      setCurrentPage(page)
    }
  }

  if (!isLoggedIn) {
    return <LoginPage onLogin={handleLogin} />
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {currentPage === "dashboard" && <MainDashboard onNavigate={handleNavigation} />}
      {currentPage === "sales" && <SalesManagement onNavigate={handleNavigation} />}
      {currentPage === "mdi" && <MDIPage onNavigate={handleNavigation} />}
    </div>
  )
}
