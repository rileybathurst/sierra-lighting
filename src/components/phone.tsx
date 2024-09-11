import React from 'react';

export const Phone = ({ phone }: { phone: number }) => {
  const string = phone.toString();
  const change = string.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");

  return (
    <a href={`tel:${phone}`}>{change}</a>
  )
}