export interface JobInterface {
  job_id: string;
  job_title?: string;
  employer_name?: string;
  employer_logo?: string | null;
  job_city?: string;
  job_country?: string;
  job_highlights?: {
    Qualifications?: string[];
    Responsibilities?: string[];
    Benefits?: string[];
  };
}
