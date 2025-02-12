const experiences = [
  {
    title: 'Frontend Developer',
    startDate: '11/2020',
    endDate: '11/2021',
    achievments: [
      'Developed a new feature for the website',
      'Improved the website performance by 20%',
    ],
  },
  {
    title: 'Backend Developer',
    startDate: '11/2020',
    endDate: '11/2021',
    achievments: [
      'Developed a new feature for the website',
      'Improved the website performance by 20%',
    ],
  },
  {
    title: 'Fullstack Developer',
    startDate: '11/2020',
    endDate: '11/2021',
    achievments: [
      'Developed a new feature for the website',
      'Improved the website performance by 20%',
    ],
  },
]

const MyExperience = () => {
  return (
    <section className="flex h-screenDvh w-full flex-col items-start justify-center py-24 md:w-1/2">
      {experiences.map((experience, index) => (
        <div key={experience.title} className="flex">
          <div className="relative mr-4 flex flex-col items-center">
            <div className="h-4 w-4 rotate-45 border-2 border-primary border-solid bg-blue-300" />
            {index < experiences.length - 1 && (
              <div className="absolute top-4 bottom-0 w-px border-primary border-l-2 border-dashed" />
            )}
          </div>
          <div className=" pb-8">
            <h2 className="font-bold text-xl">{experience.title}</h2>
            <ul className="list-[square]">
              {experience.achievments.map((achievment) => (
                <li key={achievment} className="ml-8">
                  {achievment}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  )
}

export default MyExperience
