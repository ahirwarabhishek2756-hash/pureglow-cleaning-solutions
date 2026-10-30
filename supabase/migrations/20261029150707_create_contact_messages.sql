/*
# Create contact_messages table

1. New Tables
- `contact_messages`
  - `id` (uuid, primary key)
  - `name` (text, required, 1-100 characters)
  - `email` (text, required, 3-254 characters)
  - `subject` (text, required, 1-150 characters)
  - `message` (text, required, 1-2000 characters)
  - `created_at` (timestamptz, defaults to now)

2. Security
- Row level security is enabled on `contact_messages`.
- Visitors (anon role) may only INSERT a message. They cannot read, update or delete any submissions.
- Only the INSERT privilege is granted, so the public website cannot list other visitors' messages.

3. Notes
- The business reads submissions through the project dashboard; there is no public read path.
- Length checks on the columns mirror the validation shown on the contact form.
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL CHECK (char_length(name) BETWEEN 1 AND 100),
  email text NOT NULL CHECK (char_length(email) BETWEEN 3 AND 254),
  subject text NOT NULL CHECK (char_length(subject) BETWEEN 1 AND 150),
  message text NOT NULL CHECK (char_length(message) BETWEEN 1 AND 2000),
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

GRANT INSERT ON contact_messages TO anon, authenticated;

DROP POLICY IF EXISTS "anon_insert_contact_messages" ON contact_messages;
CREATE POLICY "anon_insert_contact_messages" ON contact_messages
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
