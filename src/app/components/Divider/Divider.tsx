interface IDivider {
  title: string
}

const Divider = ({ title }: IDivider) => {
  return (
    <section className="my-4 flex w-full items-center justify-center">
      {title === 'Wanna Talk ?' && (
        <span className="mx-2 flex-grow border-primary border-t border-dashed" />
      )}

      <span className=" px-2 text-2xl">{title}</span>
      <span className="mx-2 flex-grow border-primary border-t border-dashed" />
    </section>
  )
}

export default Divider
