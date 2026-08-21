/*
# Create leads table for contact form submissions

1. New Tables
- `leads`
  - `id` (uuid, primary key)
  - `name` (text, not null) — full name of the contact
  - `email` (text, not null) — contact email
  - `phone` (text) — optional phone/WhatsApp number
  - `company` (text) — optional company name
  - `service` (text) — which solution the lead is interested in
  - `message` (text) — free-text message from the contact form
  - `source` (text, default 'website') — where the lead came from
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `leads`.
- Allow anon + authenticated INSERT only (public contact form).
- No SELECT/UPDATE/DELETE policies for anon: leads are private to the operator
  (read via service role in a future admin tool). This is intentional — the
  public must be able to submit but never read other people's submissions.

3. Important notes
- This is a single-tenant, no-auth institutional website. The anon-key client
  submits leads; the operator reads them server-side with the service role.
- A partial policy set (INSERT only) is the correct secure design here.
*/

CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  company text,
  service text,
  message text,
  source text NOT NULL DEFAULT 'website',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_leads" ON leads;
CREATE POLICY "anon_insert_leads"
  ON leads FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
