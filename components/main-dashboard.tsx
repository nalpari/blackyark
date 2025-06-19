"use client"

import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface MainDashboardProps {
  onNavigate: (page: "dashboard" | "sales" | "mdi") => void
}

export function MainDashboard({ onNavigate }: MainDashboardProps) {
  const announcements = [
    {
      date: "2013/10/31",
      author: "홍길동",
      title: "블랙야크의 컬렉션은 독도의 굳은 의지",
      status: "미확인",
      type: "urgent",
    },
    { date: "2013/10/30", author: "홍길동", title: "10월 인천특산 교육 설명회니다.", status: "미확인", type: "normal" },
    {
      date: "2013/10/29",
      author: "홍길동",
      title: "7, 9월 인천특산교육 쉽게 신청할 10월 개신설 바랍니다.",
      status: "미확인",
      type: "normal",
    },
    { date: "2013/10/28", author: "홍길동", title: "인천특산교육 교육내용", status: "미확인", type: "normal" },
    {
      date: "2013/10/27",
      author: "홍길동",
      title: "신설허리던던 활가시설정인 강의가 있습니다. 감고...",
      status: "확인",
      type: "confirmed",
    },
    { date: "2013/10/26", author: "홍길동", title: "1차 이론교육 시간", status: "확인", type: "confirmed" },
    { date: "2013/10/25", author: "홍길동", title: "설기교육 진행 시간", status: "확인", type: "confirmed" },
    { date: "2013/10/24", author: "홍길동", title: "재수강 문의", status: "확인", type: "confirmed" },
  ]

  const salesData = [
    { date: "2013/10/28", category: "송고", quantity: 100, amount: "1,200,000", processDate: "2013/10/28" },
    { date: "2013/10/27", category: "지연", quantity: 10, amount: "200,000", processDate: "2013/10/27" },
    { date: "2013/10/26", category: "송고", quantity: 50, amount: "325,000", processDate: "2013/10/26" },
    { date: "2013/10/25", category: "송고", quantity: 80, amount: "1,000,000", processDate: "2013/10/25" },
    { date: "2013/10/24", category: "송고", quantity: 120, amount: "1,800,000", processDate: "2013/10/24" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onNavigate={onNavigate} />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* 공지사항 */}
            <div className="bg-white rounded-lg shadow">
              <div className="border-b p-4">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold flex items-center gap-2">
                    <span className="w-4 h-4 bg-blue-500 rounded"></span>
                    공지사항
                  </h2>
                  <div className="flex gap-2">
                    <label className="flex items-center gap-1">
                      <input type="radio" name="notice-filter" defaultChecked />
                      <span className="text-sm">전체</span>
                    </label>
                    <label className="flex items-center gap-1">
                      <input type="radio" name="notice-filter" />
                      <span className="text-sm">확인</span>
                    </label>
                    <label className="flex items-center gap-1">
                      <input type="radio" name="notice-filter" />
                      <span className="text-sm">미확인</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>게시일자</TableHead>
                      <TableHead>게시자</TableHead>
                      <TableHead>제목</TableHead>
                      <TableHead>확인</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {announcements.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell className="text-sm">{item.date}</TableCell>
                        <TableCell className="text-sm">{item.author}</TableCell>
                        <TableCell className="text-sm">
                          {item.type === "urgent" && (
                            <Badge variant="destructive" className="mr-2 text-xs">
                              긴급
                            </Badge>
                          )}
                          {item.title}
                        </TableCell>
                        <TableCell>
                          <Button
                            size="sm"
                            variant={item.status === "확인" ? "secondary" : "default"}
                            className="text-xs"
                          >
                            {item.status}
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>

            {/* 고객생일자 */}
            <div className="bg-white rounded-lg shadow">
              <div className="border-b p-4">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                  <span className="w-4 h-4 bg-orange-500 rounded"></span>
                  고객생일자
                </h2>
              </div>
              <div className="p-4">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>NO</TableHead>
                      <TableHead>이름</TableHead>
                      <TableHead>성별</TableHead>
                      <TableHead>고객생일</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                      <TableRow key={num}>
                        <TableCell>{num}</TableCell>
                        <TableCell>홍길동</TableCell>
                        <TableCell>여자</TableCell>
                        <TableCell>10/31</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>

            {/* 출고현황 */}
            <div className="bg-white rounded-lg shadow">
              <div className="border-b p-4">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold flex items-center gap-2">
                    <span className="w-4 h-4 bg-blue-500 rounded"></span>
                    출고현황
                  </h2>
                  <div className="flex gap-2">
                    <label className="flex items-center gap-1">
                      <input type="radio" name="delivery-filter" defaultChecked />
                      <span className="text-sm">전체</span>
                    </label>
                    <label className="flex items-center gap-1">
                      <input type="radio" name="delivery-filter" />
                      <span className="text-sm">확인</span>
                    </label>
                    <label className="flex items-center gap-1">
                      <input type="radio" name="delivery-filter" />
                      <span className="text-sm">미확인</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>송고일자</TableHead>
                      <TableHead>구분</TableHead>
                      <TableHead>횟수</TableHead>
                      <TableHead>금액</TableHead>
                      <TableHead>처리일자</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {salesData.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell className="text-sm">{item.date}</TableCell>
                        <TableCell className="text-sm">{item.category}</TableCell>
                        <TableCell className="text-sm">{item.quantity}</TableCell>
                        <TableCell className="text-sm">{item.amount}</TableCell>
                        <TableCell className="text-sm">{item.processDate}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>

            {/* 기타 위젯들 */}
            <div className="space-y-6">
              {/* 광고현황 */}
              <div className="bg-white rounded-lg shadow">
                <div className="border-b p-4">
                  <h2 className="text-lg font-semibold flex items-center gap-2">
                    <span className="w-4 h-4 bg-orange-500 rounded"></span>
                    광고현황
                  </h2>
                </div>
                <div className="p-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center p-2 bg-orange-100 rounded">
                      <span className="text-sm">2013/10/25-2013/11/30</span>
                      <Badge className="bg-orange-500">진행중</Badge>
                    </div>
                    <div className="text-sm text-gray-600">"블랙야크 T셔츠 무료 특별" Chance!</div>
                  </div>
                </div>
              </div>

              {/* 수선현황 */}
              <div className="bg-white rounded-lg shadow">
                <div className="border-b p-4">
                  <h2 className="text-lg font-semibold flex items-center gap-2">
                    <span className="w-4 h-4 bg-blue-500 rounded"></span>
                    수선현황
                  </h2>
                </div>
                <div className="p-4">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>접수일자</TableHead>
                        <TableHead>희망내용</TableHead>
                        <TableHead>스타일</TableHead>
                        <TableHead>수량</TableHead>
                        <TableHead>고객약속일</TableHead>
                        <TableHead>고객수령일</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>09/03</TableCell>
                        <TableCell>지퍼교정</TableCell>
                        <TableCell></TableCell>
                        <TableCell>1</TableCell>
                        <TableCell>09/03</TableCell>
                        <TableCell>09/08</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>09/01</TableCell>
                        <TableCell>사이즈 S로수선</TableCell>
                        <TableCell></TableCell>
                        <TableCell>2</TableCell>
                        <TableCell>09/01</TableCell>
                        <TableCell>09/05</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
