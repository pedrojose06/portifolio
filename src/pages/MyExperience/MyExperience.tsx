const experiences = [
  {
    title: 'Frontend Developer',
    startDate: '06/2023',
    endDate: 'Present',
    achievments: [
      'Developed and maintained features for the platform to support user acquisition efforts.',
      'Applied Mobile First design principles to improve user experience across mobile devices.',
      'Managed the migration process from AngularJS to React, ensuring smooth transitions and improved performance.',
      'Collaborated with cross-functional teams to implement scalable and efficient solutions.',
    ],
  },
  {
    title: 'Tech Lead',
    startDate: '11/2021',
    endDate: '05/2023',
    achievments: [
      'Maintained and improved delivered projects.',
      'Engaged with clients to gather and understand requirements.',
      'Translated client demands into actionable tasks for the development team.',
      'Assessed project needs to recommend and initiate the best technologies and approachesfor new projects.',
      'Acted as a mentor and reference for the team, collaborating in development and promoting a positive team environment.',
    ],
  },
  {
    title: 'Fullstack Developer',
    startDate: '11/2020',
    endDate: '11/2021',
    achievments: [
      'Maintained the main CRM and B2B projects, addressing client demands.',
      'Developed new features to meet client needs.',
      'Created a new MVP project to provide users with access to rental truck information.',
    ],
  },
]

const MyExperience = () => {
  return (
    <section className="flex h-auto min-h-screenDvh w-full flex-col items-start justify-center py-24 md:w-1/2">
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
