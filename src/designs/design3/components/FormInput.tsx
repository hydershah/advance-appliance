'use client';

import React, { forwardRef, useState } from 'react';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  helperText?: string;
  icon?: React.ReactNode;
}

interface FormTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  helperText?: string;
}

interface FormSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string;
  helperText?: string;
  options: { value: string; label: string }[];
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, error, helperText, icon, className = '', id, ...props }, ref) => {
    const [focused, setFocused] = useState(false);
    const inputId = id || label.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className={`${className}`}>
        <label
          htmlFor={inputId}
          className="block font-poppins text-contemporary-charcoal-900 mb-2 text-sm font-medium"
        >
          {label}
          {props.required && <span className="text-contemporary-gold-500 ml-1">*</span>}
        </label>
        <div className="relative">
          {icon && (
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-contemporary-charcoal-900/50">
              {icon}
            </div>
          )}
          <input
            ref={ref}
            id={inputId}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            className={`
              w-full px-4 py-3
              ${icon ? 'pl-12' : ''}
              bg-contemporary-white
              border
              ${error ? 'border-contemporary-gold-500' : focused ? 'border-contemporary-gold-500' : 'border-contemporary-platinum-400/30'}
              rounded-lg
              font-poppins text-contemporary-charcoal-900
              placeholder:text-contemporary-charcoal-900/40
              focus:outline-none focus:border-contemporary-gold-500 focus:ring-2 focus:ring-contemporary-gold-500/20
              transition-all duration-200
            `}
            {...props}
          />
        </div>
        {error && (
          <p className="mt-1 text-contemporary-gold-500 text-sm font-poppins flex items-center">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {error}
          </p>
        )}
        {helperText && !error && (
          <p className="mt-1 text-contemporary-charcoal-900/60 text-sm font-poppins">{helperText}</p>
        )}
      </div>
    );
  }
);

FormInput.displayName = 'FormInput';

export const FormTextarea = forwardRef<HTMLTextAreaElement, FormTextareaProps>(
  ({ label, error, helperText, className = '', id, ...props }, ref) => {
    const [focused, setFocused] = useState(false);
    const textareaId = id || label.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className={`${className}`}>
        <label
          htmlFor={textareaId}
          className="block font-poppins text-contemporary-charcoal-900 mb-2 text-sm font-medium"
        >
          {label}
          {props.required && <span className="text-contemporary-gold-500 ml-1">*</span>}
        </label>
        <textarea
          ref={ref}
          id={textareaId}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`
            w-full px-4 py-3
            bg-contemporary-white
            border
            ${error ? 'border-contemporary-gold-500' : focused ? 'border-contemporary-gold-500' : 'border-contemporary-platinum-400/30'}
            rounded-lg
            font-poppins text-contemporary-charcoal-900
            placeholder:text-contemporary-charcoal-900/40
            focus:outline-none focus:border-contemporary-gold-500 focus:ring-2 focus:ring-contemporary-gold-500/20
            transition-all duration-200
            resize-none
          `}
          rows={4}
          {...props}
        />
        {error && (
          <p className="mt-1 text-contemporary-gold-500 text-sm font-poppins flex items-center">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {error}
          </p>
        )}
        {helperText && !error && (
          <p className="mt-1 text-contemporary-charcoal-900/60 text-sm font-poppins">{helperText}</p>
        )}
      </div>
    );
  }
);

FormTextarea.displayName = 'FormTextarea';

export const FormSelect = forwardRef<HTMLSelectElement, FormSelectProps>(
  ({ label, error, helperText, options, className = '', id, ...props }, ref) => {
    const [focused, setFocused] = useState(false);
    const selectId = id || label.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className={`${className}`}>
        <label
          htmlFor={selectId}
          className="block font-poppins text-contemporary-charcoal-900 mb-2 text-sm font-medium"
        >
          {label}
          {props.required && <span className="text-contemporary-gold-500 ml-1">*</span>}
        </label>
        <div className="relative">
          <select
            ref={ref}
            id={selectId}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            className={`
              w-full px-4 py-3
              bg-contemporary-white
              border
              ${error ? 'border-contemporary-gold-500' : focused ? 'border-contemporary-gold-500' : 'border-contemporary-platinum-400/30'}
              rounded-lg
              font-poppins text-contemporary-charcoal-900
              focus:outline-none focus:border-contemporary-gold-500 focus:ring-2 focus:ring-contemporary-gold-500/20
              transition-all duration-200
              appearance-none
              cursor-pointer
            `}
            {...props}
          >
            <option value="">Select an option...</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-contemporary-charcoal-900/50">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        {error && (
          <p className="mt-1 text-contemporary-gold-500 text-sm font-poppins flex items-center">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {error}
          </p>
        )}
        {helperText && !error && (
          <p className="mt-1 text-contemporary-charcoal-900/60 text-sm font-poppins">{helperText}</p>
        )}
      </div>
    );
  }
);

FormSelect.displayName = 'FormSelect';
