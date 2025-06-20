"use client"

import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

interface HeaderProps {
  onNavigate: (page: "dashboard" | "sales" | "mdi") => void
  onViewModeChange?: (mode: "windowed" | "tabbed") => void
  viewMode?: "windowed" | "tabbed"
}

export function Header({ onNavigate, onViewModeChange, viewMode = "windowed" }: HeaderProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [favoriteMenuOpen, setFavoriteMenuOpen] = useState(false)

  const menuData = {
    "영업관리 I": {
      items: [
        {
          title: "거래선",
          subItems: ["제품", "쿠폰관리", "회계", "인리미", "수문관리", "재고관리"],
        },
        { title: "제품정보등록", subItems: [] },
        { title: "스타일정보등록", subItems: [] },
        { title: "아소트메가지코드등록", subItems: [] },
        { title: "제품정보협력업체", subItems: [] },
        { title: "제품가격정보등록", subItems: [] },
        { title: "제품출하현황", subItems: [] },
        { title: "제품진행현황", subItems: [] },
        { title: "인천하가격정보등록", subItems: [] },
        { title: "스타일정보등록", subItems: [] },
        { title: "품목별협력업체", subItems: [] },
      ],
    },
    "영업관리 II": {
      items: [
        { title: "매출관리", subItems: [] },
        { title: "고객관리", subItems: [] },
        { title: "주문관리", subItems: [] },
      ],
    },
  }

  useEffect(() => {
    const handleClickOutside = () => {
      setActiveDropdown(null)
    }

    if (activeDropdown) {
      document.addEventListener("click", handleClickOutside)
      return () => document.removeEventListener("click", handleClickOutside)
    }
  }, [activeDropdown])

  return (
    <header className="bg-white border-b">
      {/* 상단 유틸리티 바 */}
      <div className="bg-gray-50 px-6 py-1 flex justify-end items-center gap-4 text-sm">
        <span>로그아웃</span>
        <span className="text-red-600 font-semibold">MY정보</span>
        <span>ETS</span>
        <span>원격지원</span>
        <span>수주</span>
      </div>

      {/* 메인 헤더 */}
      <div className="bg-red-600 text-white">
        <div className="flex items-center">
          {/* 로고 */}
          <div className="flex items-center gap-2 px-6 py-3">
            <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
              <span className="text-red-600 font-bold text-sm">B</span>
            </div>
            <span className="font-bold text-lg">INTERPLUG</span>
            <span className="text-xs opacity-75">DESIGNED BY MOUNTAINEERS</span>
          </div>

          {/* 네비게이션 */}
          <nav className="flex-1 flex relative">
            <Button
              variant="ghost"
              className="text-white hover:bg-red-700 rounded-none px-6 py-4 h-auto"
              onClick={() => onNavigate("dashboard")}
            >
              기획관리
            </Button>
            <Button
              variant="ghost"
              className="text-white hover:bg-red-700 rounded-none px-6 py-4 h-auto"
              onClick={() => onNavigate("dashboard")}
            >
              생산관리
            </Button>
            <Button
              variant="ghost"
              className="text-white hover:bg-red-700 rounded-none px-6 py-4 h-auto"
              onClick={() => onNavigate("dashboard")}
            >
              물류관리
            </Button>

            {/* 영업관리 I - 드롭다운 메뉴 */}
            <div className="relative">
              <Button
                variant="ghost"
                className="text-white hover:bg-red-700 rounded-none px-6 py-4 h-auto"
                onClick={() => setActiveDropdown(activeDropdown === "영업관리 I" ? null : "영업관리 I")}
              >
                영업관리 I
              </Button>

              {activeDropdown === "영업관리 I" && (
                <div className="absolute top-full left-0 bg-white border shadow-lg z-50 min-w-[200px]">
                  {menuData["영업관리 I"].items.map((item, index) => (
                    <div key={index} className="relative group">
                      <button
                        className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700 text-sm border-b"
                        onClick={() => {
                          if (item.title === "제품정보등록") {
                            onNavigate("sales")
                            setActiveDropdown(null)
                          }
                        }}
                      >
                        {item.title}
                        {item.subItems.length > 0 && <span className="float-right">▶</span>}
                      </button>

                      {item.subItems.length > 0 && (
                        <div className="absolute left-full top-0 bg-white border shadow-lg hidden group-hover:block min-w-[150px]">
                          {item.subItems.map((subItem, subIndex) => (
                            <button
                              key={subIndex}
                              className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-600 text-sm border-b"
                              onClick={() => {
                                setActiveDropdown(null)
                              }}
                            >
                              {subItem}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* 영업관리 II - 드롭다운 메뉴 */}
            <div className="relative">
              <Button
                variant="ghost"
                className="text-white hover:bg-red-700 rounded-none px-6 py-4 h-auto"
                onClick={() => setActiveDropdown(activeDropdown === "영업관리 II" ? null : "영업관리 II")}
              >
                영업관리 II
              </Button>

              {activeDropdown === "영업관리 II" && (
                <div className="absolute top-full left-0 bg-white border shadow-lg z-50 min-w-[200px]">
                  {menuData["영업관리 II"].items.map((item, index) => (
                    <button
                      key={index}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700 text-sm border-b"
                      onClick={() => {
                        setActiveDropdown(null)
                      }}
                    >
                      {item.title}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Button
              variant="ghost"
              className="text-white hover:bg-red-700 rounded-none px-6 py-4 h-auto"
              onClick={() => onNavigate("mdi")}
            >
              매장관리
            </Button>
          </nav>
        </div>
      </div>

      {/* 서브 네비게이션 */}
      <div className="bg-gray-100 flex items-center">
        <div className="flex">
          <Button
            variant="ghost"
            size="sm"
            className="bg-white border border-gray-300 border-b-0 rounded-t-md rounded-b-none px-4 py-2 text-sm font-medium shadow-sm hover:bg-gray-50 m-0"
          >
            MENU
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="bg-gray-600 text-white border border-gray-600 border-b-0 rounded-t-md rounded-b-none px-4 py-2 text-sm font-medium shadow-sm hover:bg-gray-700 m-0"
          >
            즐겨찾기
          </Button>
        </div>

        <div className="flex-1 flex justify-end items-center gap-2 px-6 py-2">
          <div className="flex gap-1">
            <Button variant="ghost" size="sm" className="w-8 h-8 p-0">
              ←
            </Button>
            <Button variant="ghost" size="sm" className="w-8 h-8 p-0">
              →
            </Button>
            <Button variant="ghost" size="sm" className="w-8 h-8 p-0">
              ⟲
            </Button>
            <Button variant="ghost" size="sm" className="w-8 h-8 p-0" onClick={() => onViewModeChange?.("windowed")}>
              ⊞
            </Button>
            <Button variant="ghost" size="sm" className="w-8 h-8 p-0" onClick={() => onViewModeChange?.("tabbed")}>
              ⊟
            </Button>
            <Button variant="ghost" size="sm" className="w-8 h-8 p-0">
              ⊠
            </Button>
            <Button variant="ghost" size="sm" className="w-8 h-8 p-0">
              ⊡
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="w-8 h-8 p-0 bg-orange-500 text-white hover:bg-orange-600"
              onClick={() => setFavoriteMenuOpen(!favoriteMenuOpen)}
            >
              ★
            </Button>
          </div>
        </div>
      </div>
      {/* 즐겨찾기 메뉴 패널 */}
      {favoriteMenuOpen && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-20 z-40" onClick={() => setFavoriteMenuOpen(false)} />
          <div className="fixed top-[120px] right-4 w-80 bg-white border shadow-lg z-50 rounded">
            <div className="bg-gray-100 px-4 py-2 border-b flex items-center justify-between">
              <span className="font-semibold text-sm">즐겨찾기</span>
              <button onClick={() => setFavoriteMenuOpen(false)} className="text-gray-500 hover:text-gray-700">
                ✕
              </button>
            </div>

            <div className="p-2 max-h-96 overflow-y-auto">
              <div className="space-y-1">
                {/* 관리 폴더 */}
                <div className="flex items-center gap-1 p-1 hover:bg-gray-100 rounded text-sm">
                  <span className="text-yellow-600">📁</span>
                  <span>관리</span>
                </div>

                {/* 영업관리 폴더 */}
                <div className="ml-4">
                  <div className="flex items-center gap-1 p-1 hover:bg-gray-100 rounded text-sm">
                    <span className="text-yellow-600">📁</span>
                    <span>영업관리</span>
                  </div>

                  <div className="ml-4 space-y-1">
                    <div className="flex items-center gap-1 p-1 hover:bg-gray-100 rounded text-xs">
                      <span className="text-blue-600">📄</span>
                      <span>제품정보등록</span>
                    </div>
                    <div className="flex items-center gap-1 p-1 hover:bg-gray-100 rounded text-xs">
                      <span className="text-blue-600">📄</span>
                      <span>제품진행현황</span>
                    </div>
                    <div className="flex items-center gap-1 p-1 hover:bg-gray-100 rounded text-xs">
                      <span className="text-blue-600">📄</span>
                      <span>제품출하현황</span>
                    </div>
                    <div className="flex items-center gap-1 p-1 hover:bg-gray-100 rounded text-xs">
                      <span className="text-blue-600">📄</span>
                      <span>품목별협력업체</span>
                    </div>
                    <div className="flex items-center gap-1 p-1 hover:bg-gray-100 rounded text-xs">
                      <span className="text-blue-600">📄</span>
                      <span>인터플러그시스템 메뉴</span>
                    </div>
                    <div className="flex items-center gap-1 p-1 hover:bg-gray-100 rounded text-xs">
                      <span className="text-blue-600">📄</span>
                      <span>스타일정보등록</span>
                    </div>
                    <div className="flex items-center gap-1 p-1 hover:bg-gray-100 rounded text-xs">
                      <span className="text-blue-600">📄</span>
                      <span>제품정보협력수정</span>
                    </div>
                    <div className="flex items-center gap-1 p-1 hover:bg-gray-100 rounded text-xs">
                      <span className="text-blue-600">📄</span>
                      <span>아소트메가지코드등록</span>
                    </div>
                  </div>
                </div>

                {/* 물류관리 폴더 */}
                <div className="ml-4">
                  <div className="flex items-center gap-1 p-1 hover:bg-gray-100 rounded text-sm">
                    <span className="text-yellow-600">📁</span>
                    <span>물류관리</span>
                  </div>
                </div>

                {/* 매장관리 폴더 */}
                <div className="ml-4">
                  <div className="flex items-center gap-1 p-1 hover:bg-gray-100 rounded text-sm">
                    <span className="text-yellow-600">📁</span>
                    <span>매장관리</span>
                  </div>
                </div>

                {/* 생산관리 폴더 */}
                <div className="ml-4">
                  <div className="flex items-center gap-1 p-1 hover:bg-gray-100 rounded text-sm">
                    <span className="text-yellow-600">📁</span>
                    <span>생산관리</span>
                  </div>
                </div>

                {/* 자주사용하는 메뉴 폴더 */}
                <div className="ml-4">
                  <div className="flex items-center gap-1 p-1 hover:bg-gray-100 rounded text-sm">
                    <span className="text-yellow-600">📁</span>
                    <span>자주사용하는 메뉴</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  )
}
