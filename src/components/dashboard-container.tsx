import React from 'react';
import { DashboardContainerProps } from 'piral';

export const DashboardContainer: React.FC<DashboardContainerProps> = ({
  children,
}) => (
  <div>
    <h1>Hello, world!</h1>
    <p>Welcome to your new microfrontend app shell, built with:</p>
    <div className="tiles">{children}</div>
  </div>
);
