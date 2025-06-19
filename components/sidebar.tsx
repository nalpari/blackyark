"use client"

import { ChevronDown, ChevronRight } from "lucide-react"
import { useState } from "react"

export function Sidebar() {
  const [expandedItems, setExpandedItems] = useState<string[]>(["기획관리"])

  const toggleExpanded = (item: string) => {
    setExpandedItems((prev) => (prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]))
  }

  const menuItems = [
    {
      title: "기획관리",
      items: ["공지사항", "출고현황", "광고현황", "수선현황"],
    },
    {
      title: "제품",
      items: ["제품정보등록", "스타일정보등록", "아소트메가지코드등록"],
    },
    {
      title: "금융관리",
      items: [],
    },
    {
      title: "회계",
      items: [],
    },
    {
      title: "인리미",
      items: [],
    },
    {
      title: "수문관리",
      items: [],
    },
    {
      title: "재고관리",
      items: [],
    },
  ]

  return (
    <aside className="w-64 bg-white border-r min-h-screen">
      <div className="p-4">
        {menuItems.map((section) => (
          <div key={section.title} className="mb-2">
            <button
              onClick={() => toggleExpanded(section.title)}
              className="flex items-center justify-between w-full p-2 text-left hover:bg-gray-100 rounded"
            >
              <span className="text-sm font-medium">{section.title}</span>
              {section.items.length > 0 &&
                (expandedItems.includes(section.title) ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                ))}
            </button>

            {expandedItems.includes(section.title) && section.items.length > 0 && (
              <div className="ml-4 mt-1">
                {section.items.map((item) => (
                  <button
                    key={item}
                    className="block w-full text-left p-2 text-sm text-gray-600 hover:bg-gray-50 rounded"
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </aside>
  )
}
