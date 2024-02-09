export default function ButtonGroup({ next, previous }: any) {
  const classes =
    " shadow-sm shadow-mothGrey-0 p-4 text-[16px] whitespace-nowrap rounded border-2 border-mothBlack-0 text-mothGrey-0 font-bold"
  return (
    <div className="flex w-full gap-4 justify-center">
      <div className="bg-mothBlack-0 rounded">
        <button
          className={`${classes} bg-mothOrange-0/90`}
          type="button"
          onClick={() => previous()}
        >
          Prev Project
        </button>
      </div>
      <div className="bg-mothBlack-0 rounded">
        <button
          type="button"
          className={`${classes} bg-mothGreen-0/80 `}
          onClick={() => next()}
        >
          Next Project
        </button>
      </div>
    </div>
  )
}
