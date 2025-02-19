export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-900">🚀 캣프레소 프리세일</h1>
      <p className="mt-4 text-lg text-gray-700">
        캣프레소 토큰의 프리세일이 시작되었습니다! 지금 참여하세요!
      </p>
      <a
        href="https://phantom.app/"
        target="_blank"
        className="mt-6 px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg"
      >
        팬텀 지갑 연결하기
      </a>
    </div>
  );
}

