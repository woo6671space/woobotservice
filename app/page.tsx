"use client"

import { Button } from "@/components/ui/button"
import { Shield, BarChart3, Zap, Users, FileText, Ticket, Check } from "lucide-react"

export default function HomePage() {
  const prefixCommands = [
    {
      title: "제재 & 제어",
      description: "!타임아웃, !밴, !킥, !경고추가",
      icon: Shield,
    },
    {
      title: "로그 & 기록",
      description: "!메세지로그, !멤버로그, !처벌로그",
      icon: BarChart3,
    },
    {
      title: "유틸리티",
      description: "!메시지삭제, !스티키메시지, !슬로우모드",
      icon: Zap,
    },
    {
      title: "사용자 관리",
      description: "!역할추가, !역할제거, !닉네임변경",
      icon: Users,
    },
    {
      title: "메시지 도구",
      description: "!메시지삭제, !스티키메시지, !임베드",
      icon: FileText,
    },
  ]

  const slashCommands = [
    {
      title: "티켓 시스템",
      description: "/티켓패널, /티켓관리, /티켓닫기",
      icon: Ticket,
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">WooBot</span>
            </h1>
            <div className="flex gap-3">
              <a href="https://discord.gg/gyMcprhhBh" target="_blank" rel="noopener noreferrer">
                <Button className="bg-blue-600 hover:bg-blue-700">Discord</Button>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="space-y-6">
            <div className="inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm text-blue-300">
              🚀 서버 관리 자동화의 새로운 표준
            </div>
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              서버를 완벽하게 <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                관리하세요
              </span>
            </h1>
            <p className="text-xl text-slate-300">
              WooBot Service는 모드레이션, 로그 기능, 자동화 시스템으로
              <br />
              당신의 디스코드 서버를 완벽하게 보호합니다.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
              <a href="https://discord.gg/gyMcprhhBh" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                >
                  봇 초대하기
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-16 text-center text-4xl font-bold text-white">강력한 기능</h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {prefixCommands.map((cmd, idx) => {
              const Icon = cmd.icon
              return (
                <div
                  key={idx}
                  className="group relative overflow-hidden rounded-xl border border-slate-700/50 bg-slate-800/30 p-6 transition-all hover:border-blue-500/50 hover:bg-slate-800/50"
                >
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-3">
                      <Icon className="h-6 w-6 text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-white">{cmd.title}</h3>
                      <p className="mt-2 text-sm text-slate-400">{cmd.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Command Types */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-16 text-center text-4xl font-bold text-white">명령어 체계</h2>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Prefix Commands */}
            <div className="group relative rounded-2xl border border-slate-700 bg-slate-800/40 p-8 transition-all hover:border-blue-500/50 hover:bg-slate-800/60">
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 font-bold text-xl text-white">
                    !
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Prefix</h3>
                    <p className="text-sm text-slate-400">프리픽스(!) 명령어</p>
                  </div>
                </div>

                <p className="text-slate-300">모든 주요 기능을 Prefix 명령어로 사용할 수 있습니다.</p>

                <div className="grid grid-cols-2 gap-3">
                  {prefixCommands.map((cmd, idx) => (
                    <div
                      key={idx}
                      className="rounded-lg bg-slate-700/30 p-3 border border-slate-600/50 hover:border-blue-500/30 transition-colors"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <Check className="h-4 w-4 text-blue-400" />
                        <p className="text-sm font-medium text-white">{cmd.title}</p>
                      </div>
                      <p className="text-xs text-slate-400">{cmd.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Slash Commands */}
            <div className="group relative rounded-2xl border border-slate-700 bg-slate-800/40 p-8 transition-all hover:border-purple-500/50 hover:bg-slate-800/60">
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 font-bold text-xl text-white">
                    /
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Slash</h3>
                    <p className="text-sm text-slate-400">슬래시(/) 명령어</p>
                  </div>
                </div>

                <p className="text-slate-300">현대적인 디스코드 명령어 방식으로 제공됩니다.</p>

                <div className="space-y-3">
                  {slashCommands.map((cmd, idx) => (
                    <div
                      key={idx}
                      className="rounded-lg bg-slate-700/30 p-4 border border-slate-600/50 hover:border-purple-500/30 transition-colors"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <Check className="h-4 w-4 text-purple-400" />
                        <p className="font-medium text-white">{cmd.title}</p>
                      </div>
                      <p className="text-sm text-slate-400">{cmd.description}</p>
                    </div>
                  ))}
                </div>

                <div className="rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-3 border border-purple-500/20">
                  <p className="text-xs text-slate-300">✨티켓 시스템은 Slash 명령어 전용입니다.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="mx-auto max-w-3xl">
          <div className="relative overflow-hidden rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-500/10 via-blue-500/5 to-transparent p-12 text-center">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-3xl" />
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white">지금 바로 시작하세요</h2>
              <p className="mt-4 text-slate-300">50개 이상의 명령어로 당신의 서버를 완벽하게 관리하고 보호하세요.</p>
              <a href="https://discord.gg/gyMcprhhBh" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  봇 초대하기
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <h3 className="font-bold text-white">WooBot Service</h3>
              <p className="mt-2 text-sm text-slate-400">디스코드 서버 관리의 완벽한 솔루션</p>
            </div>
            <div>
              <h4 className="font-semibold text-white">링크</h4>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a
                    href="https://discord.gg/gyMcprhhBh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-blue-400 transition-colors"
                  >
                    Discord
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
            <p>&copy; 2025 WooBot Service. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
