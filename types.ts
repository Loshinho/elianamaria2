import React from 'react';

export interface ServiceItem {
  name: string;
  icon?: React.ReactNode;
}

export interface PackageDetails {
  title: string;
  price: string;
  features: string[];
}