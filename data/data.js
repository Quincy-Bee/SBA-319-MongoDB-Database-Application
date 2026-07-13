const contacts = [
  {
    firstName: "Jamal",
    lastName: "Williams",
    email: "jamal.williams@email.com",
    phone: "555-111-2222",
    neighborhood: "Bed-Stuy",
    status: "lead"
  },
  {
    firstName: "Sofia",
    lastName: "Rodriguez",
    email: "sofia.rodriguez@email.com",
    phone: "555-333-4444",
    neighborhood: "Queens",
    status: "client"
  },
  {
    firstName: "Kenji",
    lastName: "Tanaka",
    email: "kenji.tanaka@email.com",
    phone: "555-555-5555",
    neighborhood: "Manhattan",
    status: "lead"
  },
  {
    firstName: "Aaliyah",
    lastName: "Jackson",
    email: "aaliyah.jackson@email.com",
    phone: "555-777-8888",
    neighborhood: "Brooklyn",
    status: "closed"
  },
  {
    firstName: "Mateo",
    lastName: "Garcia",
    email: "mateo.garcia@email.com",
    phone: "555-999-0000",
    neighborhood: "Bronx",
    status: "lead"
  }
];

const calls = [
  {
    contactName: "Jamal Williams",
    phone: "555-111-2222",
    notes: "Interested in buying a first home in Brooklyn",
    outcome: "interested",
    callDate: new Date()
  },
  {
    contactName: "Sofia Rodriguez",
    phone: "555-333-4444",
    notes: "Needs a rental apartment near transportation",
    outcome: "follow up",
    callDate: new Date()
  },
  {
    contactName: "Kenji Tanaka",
    phone: "555-555-5555",
    notes: "Looking for an investment property",
    outcome: "interested",
    callDate: new Date()
  },
  {
    contactName: "Aaliyah Jackson",
    phone: "555-777-8888",
    notes: "Completed purchase consultation",
    outcome: "interested",
    callDate: new Date()
  },
  {
    contactName: "Mateo Garcia",
    phone: "555-999-0000",
    notes: "Following up after property showing",
    outcome: "follow up",
    callDate: new Date()
  }
];

const appointments = [
  {
    contactName: "Jamal Williams",
    appointmentType: "consultation",
    location: "Brooklyn",
    date: new Date()
  },
  {
    contactName: "Sofia Rodriguez",
    appointmentType: "showing",
    location: "Queens",
    date: new Date()
  },
  {
    contactName: "Kenji Tanaka",
    appointmentType: "inspection",
    location: "Manhattan",
    date: new Date()
  },
  {
    contactName: "Aaliyah Jackson",
    appointmentType: "showing",
    location: "Brooklyn",
    date: new Date()
  },
  {
    contactName: "Mateo Garcia",
    appointmentType: "consultation",
    location: "Bronx",
    date: new Date()
  }
];

export { contacts, calls, appointments };