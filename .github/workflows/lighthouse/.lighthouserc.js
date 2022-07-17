module.exports = {
  ci: {
    collect: {
      numberOfRuns: 3,
    },
    assert: {
      // preset: 'lighthouse:no-pwa',
      'csp-xss': [
        'warn',
        {
          minScore: 0,
        },
      ],
      'categories:performance': [
        'error',
        {
          minScore: 0.8,
        },
      ],
      'categories:accessibility': [
        'error',
        {
          minScore: 1,
        },
      ],
      'categories:best-practices': [
        'error',
        {
          minScore: 1,
        },
      ],
      'categories:seo': [
        'error',
        {
          minScore: 0.8,
        },
      ],
    },
  },
};
