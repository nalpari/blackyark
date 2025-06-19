"use client"

import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search, Minimize2, Maximize2, X } from "lucide-react"
import { useState } from "react"

interface MDIPageProps {
  onNavigate: (page: "dashboard" | "sales" | "mdi") => void
}

export function MDIPage({ onNavigate }: MDIPageProps) {
  const [viewMode, setViewMode] = useState<"windowed" | "tabbed">("windowed")
  const [activeTab, setActiveTab] = useState("창고재고현황")

  const tabs = [
    { id: "창고재고현황", title: "창고재고현황", closable: true },
    { id: "제품정보등록", title: "제품정보등록", closable: true },
    { id: "제품판매출현황", title: "제품판매출현황", closable: true },
    { id: "개시단현황", title: "개시단현황", closable: true },
  ]

  const productData = [
    {
      code: "5BYGIF301",
      brand: "C59nu",
      name: "트로이지켓#1",
      color: "blue",
      size: "080",
      quantity: "0",
      sales: "0",
      stock: "0",
    },
    {
      code: "5BYGIM362",
      brand: "C59nu",
      name: "B1XH2지켓#2",
      color: "green",
      size: "080",
      quantity: "100",
      sales: "100",
      stock: "100",
    },
    {
      code: "5BYPNW205",
      brand: "C59nu",
      name: "민슬롤코스#1",
      color: "yellow",
      size: "090",
      quantity: "10",
      sales: "10",
      stock: "10",
    },
    {
      code: "5BYTSW264",
      brand: "C59nu",
      name: "B3XG3티셔츠#2",
      color: "orange",
      size: "090",
      quantity: "15",
      sales: "15",
      stock: "15",
    },
    {
      code: "5BYGIM362",
      brand: "C59nu",
      name: "B1XH2지켓#2",
      color: "red",
      size: "095",
      quantity: "20",
      sales: "20",
      stock: "20",
    },
  ]

  const WindowContent = ({ title, showPricing = false }: { title: string; showPricing?: boolean }) => (
    <div className="bg-white border rounded-lg shadow-lg h-96 flex flex-col">
      {/* 윈도우 헤더 */}
      <div className="bg-gray-600 text-white px-4 py-2 flex items-center justify-between rounded-t-lg">
        <span className="text-sm font-medium">{title}</span>
        <div className="flex gap-1">
          <button className="w-4 h-4 bg-gray-400 rounded-sm flex items-center justify-center hover:bg-gray-300">
            <Minimize2 className="w-2 h-2" />
          </button>
          <button className="w-4 h-4 bg-gray-400 rounded-sm flex items-center justify-center hover:bg-gray-300">
            <Maximize2 className="w-2 h-2" />
          </button>
          <button className="w-4 h-4 bg-red-500 rounded-sm flex items-center justify-center hover:bg-red-400">
            <X className="w-2 h-2" />
          </button>
        </div>
      </div>

      {/* 필터 섹션 */}
      <div className="p-3 border-b bg-gray-50">
        <div className="grid grid-cols-3 gap-2 mb-2">
          <div>
            <label className="block text-xs font-medium mb-1">브랜드</label>
            <Select defaultValue="블랙야크">
              <SelectTrigger className="h-7 text-xs">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="블랙야크">블랙야크</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block text-xs font-medium mb-1">기획년도</label>
            <Select defaultValue="2013">
              <SelectTrigger className="h-7 text-xs">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2013">2013</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block text-xs font-medium mb-1">제품구분</label>
            <Select>
              <SelectTrigger className="h-7 text-xs">
                <SelectValue placeholder="선택" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">전체</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div>
            <label className="block text-xs font-medium mb-1">제품코드</label>
            <div className="flex gap-1">
              <Input className="h-7 text-xs" placeholder="입력" />
              <Button size="sm" variant="outline" className="h-7 w-7 p-0">
                <Search className="w-3 h-3" />
              </Button>
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium mb-1">제품구분</label>
            <Select defaultValue="FW">
              <SelectTrigger className="h-7 text-xs">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="FW">FW</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block text-xs font-medium mb-1">품목코드</label>
            <Select>
              <SelectTrigger className="h-7 text-xs">
                <SelectValue placeholder="선택" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">전체</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* 테이블 */}
      <div className="flex-1 overflow-auto">
        <div className="p-2">
          <h3 className="text-sm font-semibold mb-2 flex items-center gap-2">
            <span className="w-3 h-3 bg-blue-500 rounded"></span>
            재고 현황
          </h3>
        </div>
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead className="text-xs p-2">제품코드</TableHead>
              <TableHead className="text-xs p-2">브랜드명</TableHead>
              <TableHead className="text-xs p-2">제품명</TableHead>
              <TableHead className="text-xs p-2">칼라</TableHead>
              <TableHead className="text-xs p-2">사이즈</TableHead>
              {showPricing && (
                <>
                  <TableHead className="text-xs p-2">소비자가</TableHead>
                  <TableHead className="text-xs p-2">운영재</TableHead>
                </>
              )}
              <TableHead className="text-xs p-2">칼라</TableHead>
              <TableHead className="text-xs p-2">사이즈</TableHead>
              <TableHead className="text-xs p-2">입고</TableHead>
              <TableHead className="text-xs p-2">출고</TableHead>
              <TableHead className="text-xs p-2">재고</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {productData.map((item, index) => (
              <TableRow key={index} className="hover:bg-gray-50">
                <TableCell className="text-xs p-2">{item.code}</TableCell>
                <TableCell className="text-xs p-2">{item.brand}</TableCell>
                <TableCell className="text-xs p-2">{item.name}</TableCell>
                <TableCell className="text-xs p-2">
                  <div className="w-3 h-3 rounded" style={{ backgroundColor: item.color }}></div>
                </TableCell>
                <TableCell className="text-xs p-2">{item.size}</TableCell>
                {showPricing && (
                  <>
                    <TableCell className="text-xs p-2">100</TableCell>
                    <TableCell className="text-xs p-2">238,000</TableCell>
                  </>
                )}
                <TableCell className="text-xs p-2">{item.size}</TableCell>
                <TableCell className="text-xs p-2 text-right">{item.quantity}</TableCell>
                <TableCell className="text-xs p-2 text-right">{item.sales}</TableCell>
                <TableCell className="text-xs p-2 text-right">{item.stock}</TableCell>
                <TableCell className="text-xs p-2 text-right">{item.stock}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )

  const TabbedView = () => (
    <div className="flex flex-col h-full">
      {/* 탭 헤더 */}
      <div className="bg-gray-200 border-b flex">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`flex items-center px-4 py-2 border-r cursor-pointer ${
              activeTab === tab.id ? "bg-white border-b-0" : "bg-gray-100 hover:bg-gray-50"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span className="text-sm">{tab.title}</span>
            {tab.closable && (
              <button className="ml-2 text-gray-500 hover:text-gray-700">
                <X className="w-3 h-3" />
              </button>
            )}
          </div>
        ))}
      </div>

      {/* 탭 컨텐츠 */}
      <div className="flex-1 p-4 bg-white">
        {/* 브레드크럼 */}
        <div className="mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>HOME</span>
            <span>{">"}</span>
            <span>영업관리 I</span>
            <span>{">"}</span>
            <span className="text-red-600 font-semibold">{activeTab}</span>
          </div>
        </div>

        {/* 액션 버튼들 */}
        <div className="flex justify-end gap-2 mb-4">
          <Button variant="outline" size="sm" className="gap-2">
            <Search className="w-4 h-4" />
            조회
          </Button>
          <Button variant="outline" size="sm">
            저장
          </Button>
          <Button variant="outline" size="sm">
            삭제
          </Button>
          <Button variant="outline" size="sm">
            파일
          </Button>
          <Button variant="outline" size="sm">
            인쇄
          </Button>
          <Button variant="outline" size="sm">
            신규
          </Button>
        </div>

        {/* 필터 섹션 */}
        <div className="bg-white rounded-lg shadow mb-6">
          <div className="p-4 border-b">
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">브랜드</label>
                <Select defaultValue="블랙야크">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="블랙야크">블랙야크</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">기획년도</label>
                <Select defaultValue="2013">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2013">2013</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">제품구분</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="선택" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">전체</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">창고</label>
                <Select defaultValue="501 용인(BY)">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="501 용인(BY)">501 용인(BY)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">재고유무</label>
                <Select defaultValue="유">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="유">유</SelectItem>
                    <SelectItem value="무">무</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">로케이션</label>
                <Input placeholder="입력" />
              </div>
            </div>
          </div>
        </div>

        {/* 재고 현황 테이블 */}
        <div className="bg-white rounded-lg shadow">
          <div className="border-b p-4">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <span className="w-4 h-4 bg-blue-500 rounded"></span>
              재고 현황
            </h2>
          </div>

          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50">
                  <TableHead className="text-center border-r">제품코드</TableHead>
                  <TableHead className="text-center border-r">브랜드명</TableHead>
                  <TableHead className="text-center border-r">제품명</TableHead>
                  <TableHead className="text-center border-r">칼라</TableHead>
                  <TableHead className="text-center border-r">사이즈</TableHead>
                  <TableHead className="text-center border-r">소비자가</TableHead>
                  <TableHead className="text-center border-r">운영재</TableHead>
                  <TableHead className="text-center border-r">칼라</TableHead>
                  <TableHead className="text-center border-r">사이즈</TableHead>
                  <TableHead className="text-center border-r">입고</TableHead>
                  <TableHead className="text-center border-r">출고</TableHead>
                  <TableHead className="text-center">재고</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {productData.map((item, index) => (
                  <TableRow key={index} className="hover:bg-gray-50">
                    <TableCell className="text-sm border-r">{item.code}</TableCell>
                    <TableCell className="text-sm border-r">{item.brand}</TableCell>
                    <TableCell className="text-sm border-r">{item.name}</TableCell>
                    <TableCell className="text-sm border-r">
                      <div className="w-4 h-4 rounded" style={{ backgroundColor: item.color }}></div>
                    </TableCell>
                    <TableCell className="text-sm border-r">{item.size}</TableCell>
                    <TableCell className="text-sm border-r">100</TableCell>
                    <TableCell className="text-sm border-r">238,000</TableCell>
                    <TableCell className="text-sm border-r">{item.size}</TableCell>
                    <TableCell className="text-sm border-r text-right">{item.quantity}</TableCell>
                    <TableCell className="text-sm border-r text-right">{item.sales}</TableCell>
                    <TableCell className="text-sm border-r text-right">{item.stock}</TableCell>
                    <TableCell className="text-sm text-right">{item.stock}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-100">
      <Header onNavigate={onNavigate} onViewModeChange={setViewMode} viewMode={viewMode} />

      {viewMode === "windowed" ? (
        <main className="p-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <WindowContent title="창고재고현황" />
            <WindowContent title="제품정보등록" showPricing={true} />
          </div>
        </main>
      ) : (
        <main className="flex-1">
          <TabbedView />
        </main>
      )}
    </div>
  )
}
