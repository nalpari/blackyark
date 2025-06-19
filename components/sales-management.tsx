"use client"

import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search, FileText, Save, PrinterIcon as Print, Upload, Download } from "lucide-react"

interface SalesManagementProps {
  onNavigate: (page: "dashboard" | "sales" | "mdi") => void
}

export function SalesManagement({ onNavigate }: SalesManagementProps) {
  const productData = [
    {
      code: "5BYGIF301",
      brand: "C59nu",
      name: "트로이지켓#1",
      size: "095",
      price: "100",
      stock: "180",
      sales: "0",
      returns: "0",
      defects: "0",
      sizeCode: "080",
      quantity: "100",
      total: "100",
      final: "100",
    },
    {
      code: "5BYGIM362",
      brand: "C59nu",
      name: "B1XH2지켓#2",
      size: "100",
      price: "238,000",
      stock: "10",
      sales: "0",
      returns: "0",
      defects: "0",
      sizeCode: "090",
      quantity: "10",
      total: "10",
      final: "10",
    },
    {
      code: "5BYPNW205",
      brand: "C59nu",
      name: "민슬롤코스#1",
      size: "100",
      price: "188,000",
      stock: "0",
      sales: "0",
      returns: "0",
      defects: "0",
      sizeCode: "090",
      quantity: "15",
      total: "15",
      final: "15",
    },
    {
      code: "5BYTSW264",
      brand: "C59nu",
      name: "B3XG3티셔츠#2",
      size: "080",
      price: "128,000",
      stock: "0",
      sales: "0",
      returns: "0",
      defects: "0",
      sizeCode: "095",
      quantity: "20",
      total: "20",
      final: "20",
    },
    {
      code: "5BYGIM362",
      brand: "C59nu",
      name: "B1XH2지켓#2",
      size: "080",
      price: "110,000",
      stock: "0",
      sales: "10",
      returns: "0",
      defects: "0",
      sizeCode: "100",
      quantity: "12",
      total: "12",
      final: "12",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onNavigate={onNavigate} />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-6">
          {/* 브레드크럼 */}
          <div className="mb-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span>HOME</span>
              <span>{">"}</span>
              <span>영업관리 I</span>
              <span>{">"}</span>
              <span className="text-red-600 font-semibold">창고재고현황</span>
            </div>
          </div>

          {/* 액션 버튼들 */}
          <div className="flex justify-end gap-2 mb-4">
            <Button variant="outline" size="sm" className="gap-2">
              <Search className="w-4 h-4" />
              조회
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <Download className="w-4 h-4" />
              저장
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <FileText className="w-4 h-4" />
              삭제
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <Print className="w-4 h-4" />
              파일
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <Upload className="w-4 h-4" />
              인쇄
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <Save className="w-4 h-4" />
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
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                <div>
                  <label className="block text-sm font-medium mb-1">제품코드</label>
                  <div className="flex gap-2">
                    <Input placeholder="입력" />
                    <Button size="sm" variant="outline">
                      <Search className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">제품구분</label>
                  <Select defaultValue="FW">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="FW">FW</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">품목코드</label>
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
                  <label className="block text-sm font-medium mb-1">조치구분</label>
                  <Select defaultValue="제품별">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="제품별">제품별</SelectItem>
                    </SelectContent>
                  </Select>
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
                    <TableHead rowSpan={2} className="text-center border-r">
                      제품코드
                    </TableHead>
                    <TableHead rowSpan={2} className="text-center border-r">
                      브랜드명
                    </TableHead>
                    <TableHead rowSpan={2} className="text-center border-r">
                      제품명
                    </TableHead>
                    <TableHead rowSpan={2} className="text-center border-r">
                      칼라
                    </TableHead>
                    <TableHead rowSpan={2} className="text-center border-r">
                      사이즈
                    </TableHead>
                    <TableHead rowSpan={2} className="text-center border-r">
                      소비자가
                    </TableHead>
                    <TableHead colSpan={4} className="text-center border-r">
                      운영재
                    </TableHead>
                    <TableHead rowSpan={2} className="text-center border-r">
                      칼라
                    </TableHead>
                    <TableHead rowSpan={2} className="text-center border-r">
                      사이즈
                    </TableHead>
                    <TableHead rowSpan={2} className="text-center border-r">
                      입고
                    </TableHead>
                    <TableHead rowSpan={2} className="text-center border-r">
                      출고
                    </TableHead>
                    <TableHead rowSpan={2} className="text-center">
                      재고
                    </TableHead>
                  </TableRow>
                  <TableRow className="bg-gray-50">
                    <TableHead className="text-center border-r">입고</TableHead>
                    <TableHead className="text-center border-r">출고</TableHead>
                    <TableHead className="text-center border-r">지시소요</TableHead>
                    <TableHead className="text-center border-r">이동</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {productData.map((item, index) => (
                    <TableRow key={index} className="hover:bg-gray-50">
                      <TableCell className="text-sm border-r">{item.code}</TableCell>
                      <TableCell className="text-sm border-r">{item.brand}</TableCell>
                      <TableCell className="text-sm border-r">{item.name}</TableCell>
                      <TableCell className="text-sm border-r">
                        <div
                          className="w-4 h-4 rounded"
                          style={{
                            backgroundColor:
                              index % 5 === 0
                                ? "#3b82f6"
                                : index % 5 === 1
                                  ? "#10b981"
                                  : index % 5 === 2
                                    ? "#f59e0b"
                                    : index % 5 === 3
                                      ? "#ef4444"
                                      : "#8b5cf6",
                          }}
                        ></div>
                      </TableCell>
                      <TableCell className="text-sm border-r">{item.size}</TableCell>
                      <TableCell className="text-sm border-r">{item.price}</TableCell>
                      <TableCell className="text-sm border-r text-right">{item.stock}</TableCell>
                      <TableCell className="text-sm border-r text-right">{item.sales}</TableCell>
                      <TableCell className="text-sm border-r text-right">{item.returns}</TableCell>
                      <TableCell className="text-sm border-r text-right">{item.defects}</TableCell>
                      <TableCell className="text-sm border-r">{item.sizeCode}</TableCell>
                      <TableCell className="text-sm border-r text-right">{item.quantity}</TableCell>
                      <TableCell className="text-sm border-r text-right">{item.total}</TableCell>
                      <TableCell className="text-sm border-r text-right">{item.final}</TableCell>
                      <TableCell className="text-sm text-right">{item.final}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* 진행률 바 */}
            <div className="p-4 border-t">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: "30%" }}></div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
