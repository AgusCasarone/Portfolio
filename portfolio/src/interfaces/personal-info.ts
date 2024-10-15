import { Presentation } from "./presentation";

export interface PersonalInfo {
  lastName: string,
  firstName: string,
  role: string,
  email: string,
  phone: string,
  phoneLink?: number,
  location: string,
  presentation: Presentation
}
