-- Run this in the Neon SQL Editor to create the table
CREATE TABLE IF NOT EXISTS billing_data (
  id INTEGER PRIMARY KEY DEFAULT 1,
  data JSONB NOT NULL,
  saved_by TEXT,
  saved_at TIMESTAMPTZ DEFAULT NOW()
);
