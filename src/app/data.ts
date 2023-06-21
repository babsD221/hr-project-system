export interface Employee {
    name: string;
    role: string;
    possibilityOfLeaving: 0 | 1;
    timeToFillPost: number;
    experience: number;
    efficiency: number;
    salary: number;
    production: number;
    photoUrl: string;
}
export  const employees: Employee[] = 
[
    
        {
            "name": "John Doe",
            "role": "Opérateur",
            "possibilityOfLeaving": 0,
            "timeToFillPost": 45,
            "experience": 5,
            "efficiency": 0.85,
            "salary": 23000,
            "production": 3600,
            "photoUrl": "https://picsum.photos/200?random=1"
        },
        {
            "name": "Jane Smith",
            "role": "Technicien",
            "possibilityOfLeaving": 1,
            "timeToFillPost": 30,
            "experience": 4,
            "efficiency": 0.95,
            "salary": 28000,
            "production": 4000,
            "photoUrl": "https://picsum.photos/200?random=2"
        },
        {
            "name": "Bob Johnson",
            "role": "Opérateur",
            "possibilityOfLeaving": 0,
            "timeToFillPost": 40,
            "experience": 6,
            "efficiency": 0.75,
            "salary": 21000,
            "production": 3400,
            "photoUrl": "https://picsum.photos/200?random=3"
        },
        {
            "name": "Bob Johnson",
            "role": "Opérateur",
            "possibilityOfLeaving": 0,
            "timeToFillPost": 40,
            "experience": 6,
            "efficiency": 0.75,
            "salary": 21000,
            "production": 3400,
            "photoUrl": "https://picsum.photos/200?random=4"
        },
        {
            "name": "Eren Jaguar",
            "role": "Safety Officer",
            "possibilityOfLeaving": 0,
            "timeToFillPost": 40,
            "experience": 6,
            "efficiency": 0.75,
            "salary": 21000,
            "production": 3400,
            "photoUrl": "https://picsum.photos/200?random=5"
        },        {
            "name": "Kotomine Kirei",
            "role": "Safety Officer",
            "possibilityOfLeaving": 0,
            "timeToFillPost": 40,
            "experience": 6,
            "efficiency": 0.75,
            "salary": 21000,
            "production": 3400,
            "photoUrl": "https://picsum.photos/200?random=6"
        },        {
            "name": "Jaden Yughi",
            "role": "Safety Officer",
            "possibilityOfLeaving": 0,
            "timeToFillPost": 40,
            "experience": 6,
            "efficiency": 0.75,
            "salary": 21000,
            "production": 3400,
            "photoUrl": "https://picsum.photos/200?random=7"
        },        {
            "name": "Nicolas Gex",
            "role": "Opérateur",
            "possibilityOfLeaving": 0,
            "timeToFillPost": 40,
            "experience": 6,
            "efficiency": 0.75,
            "salary": 21000,
            "production": 3400,
            "photoUrl": "https://picsum.photos/200?random=8"
        },        {
            "name": "Munindra Busetty",
            "role": "Opérateur",
            "possibilityOfLeaving": 0,
            "timeToFillPost": 40,
            "experience": 6,
            "efficiency": 0.75,
            "salary": 21000,
            "production": 3400,
            "photoUrl": "https://picsum.photos/200?random=9"
        },        {
            "name": "Jean Moulin",
            "role": "Opérateur",
            "possibilityOfLeaving": 0,
            "timeToFillPost": 40,
            "experience": 6,
            "efficiency": 0.75,
            "salary": 21000,
            "production": 3400,
            "photoUrl": "https://picsum.photos/200?random=10"
        },        {
            "name": "Omar Diop",
            "role": "Opérateur",
            "possibilityOfLeaving": 0,
            "timeToFillPost": 40,
            "experience": 6,
            "efficiency": 0.75,
            "salary": 21000,
            "production": 3400,
            "photoUrl": "https://picsum.photos/200?random=11"
        },        {
            "name": "Kounta Kinte",
            "role": "Opérateur",
            "possibilityOfLeaving": 0,
            "timeToFillPost": 40,
            "experience": 6,
            "efficiency": 0.75,
            "salary": 21000,
            "production": 3400,
            "photoUrl": "https://picsum.photos/200?random=12"
        },        {
            "name": "Son Goku",
            "role": "Civil Engineer",
            "possibilityOfLeaving": 0,
            "timeToFillPost": 40,
            "experience": 6,
            "efficiency": 0.75,
            "salary": 21000,
            "production": 3400,
            "photoUrl": "https://picsum.photos/200?random=13"
        },
        {
            "name": "Lee Shao Lan",
            "role": "Civil Engineer",
            "possibilityOfLeaving": 0,
            "timeToFillPost": 40,
            "experience": 6,
            "efficiency": 0.75,
            "salary": 21000,
            "production": 3400,
            "photoUrl": "https://picsum.photos/200?random=14"
        },
        {
            "name": "Jhon Murfey",
            "role": "Civil Engineer",
            "possibilityOfLeaving": 0,
            "timeToFillPost": 40,
            "experience": 6,
            "efficiency": 0.75,
            "salary": 21000,
            "production": 3400,
            "photoUrl": "https://picsum.photos/200?random=15"
        }
    
]

export interface EmployeeNeeded {
    role: string;
    number: number;
  }
  
  export interface Project {
    id: number;
    title: string;
    description: string;
    employeesNeeded: EmployeeNeeded[];
  }
  
  export const PROJECTS: Project[] = [
    {
      id: 1,
      title: 'Residential Building Construction',
      description: 'A multi-story residential building project in downtown. The building will include 100 apartment units, 2 underground parking floors and a rooftop terrace.',
      employeesNeeded: [
        { role: 'Architect', number: 2 },
        { role: 'Civil Engineer', number: 3 },
        { role: 'Construction Worker', number: 20 },
        { role: 'Site Manager', number: 1 },
      ],
    },
    {
      id: 2,
      title: 'Office Complex Development',
      description: 'An ambitious project to build an office complex that includes three 20-story buildings, outdoor areas, and basement parking. The project aims to achieve a high standard of energy efficiency and sustainability.',
      employeesNeeded: [
        { role: 'Architect', number: 3 },
        { role: 'Civil Engineer', number: 4 },
        { role: 'Construction Worker', number: 50 },
        { role: 'Project Manager', number: 2 },
      ],
    },
    {
      id: 3,
      title: 'Bridge Construction',
      description: 'A project to construct a new 500m suspension bridge over a river. The bridge will provide a vital transportation link and is designed to withstand strong winds and earthquakes.',
      employeesNeeded: [
        { role: 'Civil Engineer', number: 5 },
        { role: 'Construction Worker', number: 30 },
        { role: 'Safety Officer', number: 2 },
        { role: 'Site Manager', number: 1 },
      ],
    }
  ];
  
  