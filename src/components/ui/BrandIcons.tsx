import React from "react";

interface BrandIconProps {
  id?: string;
  size?: number;
  className?: string;
}

export function BrandIcon({ id, size = 20, className = "" }: BrandIconProps) {
  const normId = (id || "").toLowerCase().replace(/[\s\.-]/g, "");

  switch (normId) {
    // ----------------------------------------------------
    // SOCIAL & DEVELOPER PROFILES
    // ----------------------------------------------------
    case "github":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="currentColor"
          className={className}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          />
        </svg>
      );

    case "leetcode":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          className={className}
        >
          <path
            d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .666-1.607 2.6 2.6 0 0 1 .388-.392l4.255-4.547 4.357-4.246a1.378 1.378 0 0 0 .438-1.042c0-.76-.615-1.376-1.376-1.376z"
            fill="#FFA116"
          />
          <path
            d="M9.833 10.924a1.376 1.376 0 0 0-.963 2.35l4.316 4.316a1.378 1.378 0 0 0 1.95-.003 1.378 1.378 0 0 0-.003-1.95l-4.316-4.316a1.374 1.374 0 0 0-.984-.397z"
            fill="#FFFFFF"
          />
          <path
            d="M16.102 7.023a1.376 1.376 0 0 0-.974 2.348l2.396 2.392a1.378 1.378 0 0 0 1.95-.003 1.378 1.378 0 0 0-.003-1.95l-2.396-2.392a1.374 1.374 0 0 0-.973-.395z"
            fill="#FFA116"
          />
        </svg>
      );

    case "linkedin":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          className={className}
        >
          <rect width="24" height="24" rx="4" fill="#0A66C2" />
          <path
            d="M19 19h-3v-4.74c0-1.42-.51-2.26-1.78-2.26-1.32 0-1.89.96-1.89 2.26V19h-3V9h3v1.38c.41-.77 1.36-1.63 3.01-1.63 2.21 0 3.66 1.45 3.66 4.34V19zM6.5 7.5A1.75 1.75 0 1 1 6.5 4a1.75 1.75 0 0 1 0 3.5zm-1.5 11.5h3V9H5v10z"
            fill="#FFFFFF"
          />
        </svg>
      );

    case "twitter":
    case "x":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="currentColor"
          className={className}
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );

    case "resume":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      );

    // ----------------------------------------------------
    // FRONTEND TECH STACK
    // ----------------------------------------------------
    case "nextjs":
    case "next":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 180 180"
          fill="none"
          className={className}
        >
          <circle cx="90" cy="90" r="90" fill="#000000" />
          <path
            d="M149.508 157.08L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 159.979 149.508 157.08Z"
            fill="url(#next_grad)"
          />
          <rect x="115" y="54" width="12" height="72" fill="#FFFFFF" />
          <defs>
            <linearGradient
              id="next_grad"
              x1="109"
              y1="116.5"
              x2="144.5"
              y2="160.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      );

    case "react":
      return (
        <svg
          width={size}
          height={size}
          viewBox="-11.5 -10.23174 23 20.46348"
          fill="none"
          className={className}
        >
          <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
          <g stroke="#61DAFB" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      );

    case "typescript":
    case "ts":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          className={className}
        >
          <rect width="24" height="24" rx="4" fill="#3178C6" />
          <path
            d="M14.5 10.5v1.8h2.3c.7 0 1.2.2 1.5.5.3.3.4.8.4 1.4 0 .7-.2 1.2-.6 1.6-.4.4-1.1.6-2 .6-.6 0-1.1-.1-1.6-.3s-.9-.5-1.3-.9l1.1-1.4c.3.3.6.5.9.7.3.2.7.2 1.1.2.4 0 .7-.1.9-.2.2-.1.3-.3.3-.6 0-.3-.1-.5-.3-.6-.2-.1-.6-.2-1.1-.3l-.8-.2c-.7-.2-1.2-.5-1.6-.9-.3-.4-.5-.9-.5-1.5 0-.7.2-1.3.7-1.7.5-.4 1.2-.6 2-.6.5 0 1 .1 1.4.3.4.2.8.4 1.1.8l-1.1 1.4c-.3-.2-.5-.4-.8-.5-.3-.1-.6-.2-.9-.2-.4 0-.7.1-.9.2-.2.1-.3.3-.3.5zM6 10.5h2.4V19H10.5v-8.5H13V9H6v1.5z"
            fill="#FFFFFF"
          />
        </svg>
      );

    case "javascript":
    case "js":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          className={className}
        >
          <rect width="24" height="24" rx="4" fill="#F7DF1E" />
          <path
            d="M6.5 16.5l1.6-.9c.3.5.6.9 1.1.9.5 0 .8-.2.8-.7V8h2.1v7.8c0 1.1-.3 1.9-1 2.4-.7.5-1.6.6-2.5.3-.8-.3-1.5-.9-2.1-2.1zm8.3-8.5h2.1c.7 0 1.4.1 2 .4.6.3 1 .7 1.3 1.3.3.6.4 1.2.4 1.9 0 .8-.2 1.6-.7 2.2-.5.6-1.2 1-2.1 1.2l2.3 3.5h-2.4l-2.1-3.3h-.8v3.3h-2.1V8h2.3zm0 4.2h1.4c.5 0 .9-.1 1.2-.4.3-.3.4-.6.4-1.1 0-.5-.1-.8-.4-1.1-.3-.3-.7-.4-1.2-.4h-1.4v3z"
            fill="#000000"
          />
        </svg>
      );

    case "tailwind":
    case "tailwindcss":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          className={className}
        >
          <path
            d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z"
            fill="#06B6D4"
          />
        </svg>
      );

    // ----------------------------------------------------
    // BACKEND TECH STACK
    // ----------------------------------------------------
    case "nodejs":
    case "node":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          className={className}
        >
          <path
            d="M12 2l10 5.8v11.4L12 25l-10-5.8V7.8L12 2z"
            fill="#5FA04E"
            transform="scale(0.9) translate(1.3, -1)"
          />
          <path
            d="M12 4.5l7.5 4.3v8.6L12 21.7 4.5 17.4V8.8L12 4.5z"
            fill="#333333"
            transform="scale(0.9) translate(1.3, -1)"
          />
          <path
            d="M12 7l5 3v6l-5 3-5-3v-6l5-3z"
            fill="#5FA04E"
            transform="scale(0.9) translate(1.3, -1)"
          />
        </svg>
      );

    case "express":
    case "expressjs":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="currentColor"
          className={className}
        >
          <text
            x="50%"
            y="65%"
            dominantBaseline="middle"
            textAnchor="middle"
            fontFamily="system-ui, sans-serif"
            fontSize="14"
            fontWeight="bold"
            letterSpacing="-0.5px"
          >
            ex
          </text>
        </svg>
      );

    case "prisma":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          className={className}
        >
          <path
            d="M1.373 19.349L10.87 1.341c.421-.798 1.558-.813 2.001-.027l9.742 17.266a1.157 1.157 0 01-.986 1.747H2.385c-.91 0-1.442-1.02-.012-2.978z"
            fill="#2D3748"
          />
          <path
            d="M11.854 1.314c-.443-.786-1.58-.771-2.001.027L.357 19.349c-.43 1.958.102 1.978 1.012 1.978h10.485V1.314z"
            fill="#16A34A"
          />
          <path
            d="M11.854 1.314V21.327h9.761a1.157 1.157 0 00.986-1.747L12.86 2.314a1.144 1.144 0 00-1.006-1z"
            fill="#5A67D8"
          />
        </svg>
      );

    case "postgresql":
    case "postgres":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          className={className}
        >
          <path
            d="M12.016 2.004c-5.522 0-9.996 4.477-9.996 10.003 0 4.42 2.865 8.17 6.839 9.495.5.093.683-.217.683-.482 0-.238-.008-.868-.013-1.703-2.782.605-3.37-1.34-3.37-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.607.069-.607 1.004.07 1.532 1.03 1.532 1.03.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.007C22 6.481 17.538 2.004 12.016 2.004z"
            fill="#336791"
          />
          <circle cx="9" cy="11" r="1.5" fill="#FFFFFF" />
          <path
            d="M15 13.5c-.83 1.2-2.17 2-3.5 2-1.05 0-2.02-.5-2.65-1.3-.2-.25-.55-.3-.8-.1-.25.2-.3.55-.1.8.85 1.1 2.15 1.8 3.55 1.8 1.8 0 3.55-1.1 4.5-2.7.2-.3.1-.7-.2-.9-.3-.2-.7-.1-.9.2z"
            fill="#FFFFFF"
          />
        </svg>
      );

    // ----------------------------------------------------
    // TOOLS & OTHERS
    // ----------------------------------------------------
    case "git":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          className={className}
        >
          <path
            d="M21.62 10.88L13.12 2.38a1.5 1.5 0 0 0-2.12 0l-1.5 1.5 2.68 2.68a1.78 1.78 0 0 1 1.7 1.7l2.6 2.6a1.77 1.77 0 1 1-1.06 1.06l-2.45-2.45v5.33a1.78 1.78 0 1 1-1.5 0V8.88a1.78 1.78 0 0 1-.95-.95L8 10.42a1.78 1.78 0 1 1-1.06-1.06l2.5-2.5-1.5-1.5-5.56 5.56a1.5 1.5 0 0 0 0 2.12l8.5 8.5a1.5 1.5 0 0 0 2.12 0l9.62-9.62a1.5 1.5 0 0 0 0-2.12z"
            fill="#F05032"
          />
        </svg>
      );

    case "docker":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          className={className}
        >
          <path
            d="M13.98 10.05h1.96V8.1h-1.96v1.95zm-2.4 0h1.96V8.1h-1.96v1.95zm-2.4 0h1.96V8.1H9.18v1.95zm-2.4 0h1.96V8.1H6.78v1.95zm7.2-2.38h1.96V5.72h-1.96v1.95zm-2.4 0h1.96V5.72h-1.96v1.95zm-2.4 0h1.96V5.72H9.18v1.95zm7.2 4.76h1.96V10.48h-1.96v1.95zm-2.4 0h1.96V10.48h-1.96v1.95zm-2.4 0h1.96V10.48H9.18v1.95zm-2.4 0h1.96V10.48H6.78v1.95zm-2.4 0h1.96V10.48H4.38v1.95zm18.3 1.52c-.37-.27-1.22-.4-2.1-.22-.16-.92-.68-1.74-1.46-2.26l-.54-.37-.36.54c-.38.58-.58 1.25-.58 1.94 0 .16.01.32.03.48-.38.19-.88.35-1.47.45H1.6c-.32 1.3-.06 2.65.65 3.82 1.25 2.05 3.52 3.32 6.02 3.38 5.75.14 10.87-3.4 12.35-7.76h2.15l.38-.38c.44-.45.72-1.03.78-1.65.04-.4-.14-.76-.43-.97z"
            fill="#2496ED"
          />
        </svg>
      );

    case "linux":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          className={className}
        >
          <path
            d="M12 2c-2.8 0-4 2.2-4 5 0 1.2.3 2.5.6 3.5-.8.5-1.6 1.4-1.6 2.5 0 1.2.9 2 2 2.5-.2.5-.5 1.5-.5 2.5 0 2 1.5 4 3.5 4s3.5-2 3.5-4c0-1-.3-2-.5-2.5 1.1-.5 2-1.3 2-2.5 0-1.1-.8-2-1.6-2.5.3-1 .6-2.3.6-3.5 0-2.8-1.2-5-4-5z"
            fill="#FCC624"
          />
          <circle cx="10" cy="6" r="1" fill="#000000" />
          <circle cx="14" cy="6" r="1" fill="#000000" />
          <path
            d="M11 8h2l-1 2-1-2z"
            fill="#E65100"
          />
        </svg>
      );

    case "vscode":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          className={className}
        >
          <path
            d="M17.5 2.5L7.2 10.8 3.5 8 2 8.8l3 3.2-3 3.2 1.5.8 3.7-2.8 10.3 8.3L22 20.2V3.8l-4.5-1.3zm0 4.7v9.6L10.5 12 17.5 7.2z"
            fill="#007ACC"
          />
        </svg>
      );

    case "cpp":
    case "c++":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          className={className}
        >
          <path
            d="M12 2l9 5.2v10.4L12 23l-9-5.4V7.2L12 2z"
            fill="#00599C"
          />
          <text
            x="50%"
            y="62%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="#FFFFFF"
            fontFamily="system-ui, sans-serif"
            fontSize="10"
            fontWeight="bold"
          >
            C++
          </text>
        </svg>
      );

    default:
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={className}
        >
          <rect x="2" y="2" width="20" height="20" rx="4" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
  }
}
