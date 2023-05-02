export interface Booking {
    idHotel: number
    codeRoom: string
    guests: BookingGuest[]
    entryDate: string
    departureDate: string
  }
  
export interface BookingGuest {
    firstName: string
    lastName: string
    birthdate: string
    gender: number
    typeID: number
    numberID: number
    email: string
    phone: string
    nameContactEmergency: string
    phoneContactEmergency: string
  }