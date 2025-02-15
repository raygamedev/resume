export interface ExperienceData {
  jobTitle: string;
  company: string;
  dates: string;
  responsibilities: string[];
}

export interface ProfileData {
  title: string;
  location: { city: string; country: string };
  description: string[];
}
