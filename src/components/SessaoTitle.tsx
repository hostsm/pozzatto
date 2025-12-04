import { ReactNode } from 'react';

interface SessaoTitleProps {
  label?: string;
  title: string;
  as?: 'h2' | 'h3' | 'h4';
  className?: string;
  centered?: boolean;
  children?: ReactNode;
}

const SessaoTitle = ({ 
  label, 
  title, 
  as: Heading = 'h2', 
  className = '',
  centered = false,
}: SessaoTitleProps) => {
  return (
    <div className={`sessao-title ${centered ? 'text-center' : ''} ${className}`}>
      <div className="label">
        {label && (
          <span className="font-rubik text-sm font-medium text-primary tracking-wider">
            {label}
          </span>
        )}
      </div>
      <div className="subtitle">
        <Heading className="font-heebo text-[42px] font-bold text-foreground leading-tight">
          {title}
        </Heading>
      </div>
    </div>
  );
};

export default SessaoTitle;
