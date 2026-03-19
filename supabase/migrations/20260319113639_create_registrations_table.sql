/*
  # TGAA MUN Registrations Schema

  1. New Tables
    - `registrations`
      - `id` (uuid, primary key) - Unique registration identifier
      - `name` (text) - Delegate's full name
      - `email` (text) - Delegate's email address
      - `school` (text) - Delegate's school name
      - `grade` (text) - Delegate's grade level
      - `committee_preference` (text) - Preferred committee
      - `mun_experience` (text) - Prior MUN experience level
      - `created_at` (timestamptz) - Registration timestamp
      
  2. Security
    - Enable RLS on `registrations` table
    - Add policy for anyone to insert registrations (public registration)
    - Add policy for authenticated admins to view all registrations
*/

CREATE TABLE IF NOT EXISTS registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  school text NOT NULL,
  grade text NOT NULL,
  committee_preference text NOT NULL,
  mun_experience text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE registrations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can register"
  ON registrations
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view registrations"
  ON registrations
  FOR SELECT
  TO authenticated
  USING (true);