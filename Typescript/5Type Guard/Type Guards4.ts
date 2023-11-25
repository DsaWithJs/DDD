namespace ss {
  type Student = { role: "student"; grade: number };
  type Teacher = { role: "teacher"; subject: string };
  type Parent = { role: "parent"; childName: string };

  function getPerson(personId: string): Student | Teacher | Parent {
    return { childName: "ss", role: "parent" };
  }

  const parent = getPerson("some_id");
  console.log(parent.childName); // Error: Property 'childName' does not exist on type 'Teacher | Student | Parent'
}

/**
 * Custom Type Guards
 */
namespace ss {
  type Student = { role: "student"; grade: number };
  type Teacher = { role: "teacher"; subject: string };
  type Parent = { role: "parent"; childName: string };

  function isParent(person: Student | Teacher | Parent): person is Parent {
    return person.role === "parent";
  }
  function getPerson(personId: string): Student | Teacher | Parent {
    return { childName: "ss", role: "parent" };
  }
  const person = getPerson("some_id");

  if (isParent(person)) {
    console.log(person.childName);
  }
}
