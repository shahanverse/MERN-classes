// 1.Create a set to store unique email addresses entered by users in a form (avoid duplicates).
// const emails = new Set()

// emails.add('shahan@gmail.com')
// emails.add('jabin@gmail.com')
// emails.add('shahan@gmail.com')
// emails.add('naja@gmail.com')

// console.log(emails)

// 2.Remove duplicate numbers from an array using a set.
// const numbers = [1,2,1,3,4,5,6,5]

// const uniq = [...new Set(numbers)]

// console.log(uniq)

// 3.Check if a value exists in a set before inserting it (simulate a simple membership check).
// const user = new Set(['shahan', 'alex'])

// const newUser = 'jabin'

// if (user.has(newUser)) {
//   console.log('user already exits')
// }else{
//   user.add(newUser) 
//   console.log('user added')
// }

// 4.Merge two sets of skills (e.g., frontend & backend) to find total unique skills.
  // const frontend = new Set(['html', 'css', 'javascript'])
  // const backend = new Set(['mongodb', 'nodeJs', 'css'])

  // const skills = new Set([...frontend, ...backend])

  // console.log(skills)

// 5.Compare two sets (e.g., students in Class A vs Class B) and find common students.

  // const classA = new Set(['shahan','jabin', 'naja'])
  // const classB = new Set(['shayan','jabin', 'shahan'])

  // const communName = new Set()

  // for (let student of classA){
  //   if (classB.has(student)){
  //     communName.add(student)
  //   }
    
  // }
  // console.log(communName)