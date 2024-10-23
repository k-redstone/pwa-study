import { FallbackProps } from "react-error-boundary";

export default function ErrorFallback({
  error,
  resetErrorBoundary,
}: FallbackProps) {
  return (
    <div className=" flex flex-col items-center justify-center px-3 pt-52">
      <h1>{error.message}</h1>
      <button onClick={() => resetErrorBoundary()}>다시 시도</button>
      <p className=" mt-4">
        <strong className=" text-sky-400">잠시</strong> 기다려주세요
      </p>
    </div>
  );
}
