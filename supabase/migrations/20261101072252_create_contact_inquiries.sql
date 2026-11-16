/*
# Create contact_inquiries table

1. New Tables
- `contact_inquiries`: messages submitted through the website contact form.
  - `id` (uuid, primary key)
  - `full_name` (text, required, 2-100 chars)
  - `phone` (text, required, 6-20 chars)
  - `email` (text, optional, max 254 chars)
  - `service` (text, required, max 100 chars)
  - `details` (text, required, 10-2000 chars)
  - `created_at` (timestamptz, default now())

2. Security
- Row level security is enabled.
- Website visitors (anon role) can only INSERT new inquiries. They cannot read, update, or delete any inquiry.
- Only the business owner (via the Supabase dashboard) can read stored inquiries.

3. Notes
- Length checks protect the table from oversized submissions.
*/

CREATE TABLE IF NOT EXISTS contact_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL CHECK (char_length(full_name) BETWEEN 2 AND 100),
  phone text NOT NULL CHECK (char_length(phone) BETWEEN 6 AND 20),
  email text CHECK (email IS NULL OR char_length(email) <= 254),
  service text NOT NULL CHECK (char_length(service) BETWEEN 1 AND 100),
  details text NOT NULL CHECK (char_length(details) BETWEEN 10 AND 2000),
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE contact_inquiries ENABLE ROW LEVEL SECURITY;

GRANT INSERT ON contact_inquiries TO anon, authenticated;

DROP POLICY IF EXISTS "anon_insert_contact_inquiries" ON contact_inquiries;
CREATE POLICY "anon_insert_contact_inquiries" ON contact_inquiries
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
