export default function ButtonGroup({
  next,
  previous,
  goToSlide,
  ...rest
}: any) {
  return (
    <div className="flex w-full gap-4 justify-center">
      <button
        className="bg-mothOrange-0 w-32 h-16 text-[18px] bg-gradient-to-bl from-mothBlack-0/80 to-mothBlack-0/0 rounded"
        type="button"
        onClick={() => previous()}
      >
        Prev Project
      </button>
      <button
        type="button"
        className="bg-mothGreen-0 w-32 h-16 text-[18px] bg-gradient-to-tr from-mothBlack-0/80 to-mothBlack-0/0 rounded"
        onClick={() => next()}
      >
        Next Project
      </button>
    </div>
  )
}
