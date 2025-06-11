// Mintlify Navigation Configuration - Complete Examples
// Based on https://mintlify.com/docs/navigation.md

const mintlifyNavigationExamples = {
  
    // ===========================================
    // 1. SIMPLE PAGES CONFIGURATION
    // ===========================================
    // The most basic navigation structure using just an array of page references
    simplePages: {
      "navigation": {
        "pages": [
          "overview",                    // Page file: overview.mdx
          "quickstart",                  // Page file: quickstart.mdx
          "advanced/components",         // Page file: advanced/components.mdx
          "advanced/integrations"        // Page file: advanced/integrations.mdx
        ]
      }
    },
  
    // ===========================================
    // 2. GROUPS CONFIGURATION
    // ===========================================
    // Organize pages into logical groups, supports nesting
    groupsBasic: {
      "navigation": {
        "groups": [
          {
            "group": "Getting Started",     // Group title
            "pages": [
              "quickstart",
              "installation"
            ]
          },
          {
            "group": "Writing Content",
            "tag": "NEW",                   // Optional: Add a tag badge (NEW, BETA, etc.)
            "pages": [
              "writing-content/page", 
              "writing-content/text"
            ]
          }
        ]
      }
    },
  
    // Groups with nested structure (groups within groups)
    groupsNested: {
      "navigation": {
        "groups": [
          {
            "group": "Getting Started",
            "pages": [
              "quickstart",
              {
                "group": "Editing",         // Nested group
                "pages": [
                  "installation",
                  "editor",
                  {
                    "group": "Nested group", // Deeply nested group
                    "pages": [
                      "navigation",
                      "code"
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    },
  
    // ===========================================
    // 3. TABS CONFIGURATION
    // ===========================================
    // Top-level navigation tabs to distinguish different sections
    tabs: {
      "navigation": {
        "tabs": [
          {
            "tab": "API References",       // Tab title
            "pages": [
              "api-reference/get",
              "api-reference/post",
              "api-reference/delete"
            ]
          },
          {
            "tab": "SDKs",
            "pages": [
              "sdk/fetch",
              "sdk/create",
              "sdk/delete"
            ]
          },
          {
            "tab": "Blog",
            "href": "https://external-link.com/blog"  // External link tab
          }
        ]
      }
    },
  
    // ===========================================
    // 4. ANCHORS CONFIGURATION
    // ===========================================
    // Side navigation sections, appear at top of sidebar
    anchors: {
      "navigation": {
        "anchors": [
          {
            "anchor": "Documentation",     // Anchor title
            "icon": "book-open",           // Icon (recommended)
            "pages": [
              "quickstart",
              "development",
              "navigation"
            ]
          },
          {
            "anchor": "API References",
            "icon": "square-terminal",     // Note: docs had typo "sqaure-terminal"
            "pages": [
              "api-reference/get",
              "api-reference/post",
              "api-reference/delete"
            ]
          },
          {
            "anchor": "Blog",
            "href": "https://external-link.com/blog"  // External link anchor
          }
        ]
      }
    },
  
    // ===========================================
    // 5. GLOBAL ANCHORS CONFIGURATION
    // ===========================================
    // External links that appear globally across all navigation contexts
    globalAnchors: {
      "navigation": {
        "global": {
          "anchors": [
            {
              "anchor": "Community",       // External community link
              "icon": "house",
              "href": "https://slack.com"
            },
            {
              "anchor": "Blog",
              "icon": "pencil",
              "href": "https://mintlify.com/blog"
            }
          ]
        },
        "tabs": [
          // Other navigation structure can coexist with global anchors
          {
            "tab": "Documentation",
            "pages": ["overview", "quickstart"]
          }
        ]
      }
    },
  
    // ===========================================
    // 6. DROPDOWNS CONFIGURATION
    // ===========================================
    // Consolidated dropdown navigation (appears in same place as anchors)
    dropdowns: {
      "navigation": {
        "dropdowns": [
          {
            "dropdown": "Documentation",  // Dropdown title
            "icon": "book-open",          // Icon (recommended)
            "pages": [
              "quickstart",
              "development",
              "navigation"
            ]
          },
          {
            "dropdown": "API References",
            "icon": "square-terminal",
            "pages": [
              "api-reference/get",
              "api-reference/post",
              "api-reference/delete"
            ]
          },
          {
            "dropdown": "Blog",
            "href": "https://external-link.com/blog"  // External dropdown link
          }
        ]
      }
    },
  
    // ===========================================
    // 7. VERSIONS CONFIGURATION
    // ===========================================
    // Partition navigation by different versions
    versions: {
      "navigation": {
        "versions": [
          {
            "version": "1.0.0",           // Version identifier
            "groups": [
              {
                "group": "Getting Started",
                "pages": [
                  "v1/overview", 
                  "v1/quickstart", 
                  "v1/development"
                ]
              }
            ]
          },
          {
            "version": "2.0.0",
            "groups": [
              {
                "group": "Getting Started",
                "pages": [
                  "v2/overview", 
                  "v2/quickstart", 
                  "v2/development"
                ]
              }
            ]
          }
        ]
      }
    },
  
    // ===========================================
    // 8. LANGUAGES CONFIGURATION
    // ===========================================
    // Partition navigation by different languages
    // Supported languages: ar, cn, zh-Hant, en, fr, de, id, it, jp, ko, pt, pt-BR, ru, es, tr
    languages: {
      "navigation": {
        "languages": [
          {
            "language": "en",             // English
            "groups": [
              {
                "group": "Getting Started",
                "pages": [
                  "en/overview", 
                  "en/quickstart", 
                  "en/development"
                ]
              }
            ]
          },
          {
            "language": "es",             // Spanish
            "groups": [
              {
                "group": "Getting Started",
                "pages": [
                  "es/overview", 
                  "es/quickstart", 
                  "es/development"
                ]
              }
            ]
          },
          {
            "language": "fr",             // French
            "groups": [
              {
                "group": "Getting Started",
                "pages": [
                  "fr/overview", 
                  "fr/quickstart", 
                  "fr/development"
                ]
              }
            ]
          }
        ]
      }
    },
  
    // ===========================================
    // 9. COMPLEX NESTED CONFIGURATION
    // ===========================================
    // You can combine anchors, tabs, and dropdowns in various ways
    complexNested: {
      "navigation": {
        // Global external links that appear everywhere
        "global": {
          "anchors": [
            {
              "anchor": "Community",
              "icon": "users",
              "href": "https://discord.gg/community"
            },
            {
              "anchor": "GitHub",
              "icon": "github",
              "href": "https://github.com/company/repo"
            }
          ]
        },
        
        // Main navigation tabs
        "tabs": [
          {
            "tab": "Documentation",
            "anchors": [                   // Anchors within a tab
              {
                "anchor": "Getting Started",
                "icon": "rocket",
                "groups": [
                  {
                    "group": "Basics",
                    "pages": [
                      "docs/overview",
                      "docs/quickstart"
                    ]
                  },
                  {
                    "group": "Advanced",
                    "tag": "BETA",
                    "pages": [
                      "docs/advanced/customization",
                      "docs/advanced/integrations"
                    ]
                  }
                ]
              },
              {
                "anchor": "Components",
                "icon": "puzzle-piece",
                "groups": [
                  {
                    "group": "UI Components",
                    "pages": [
                      "components/buttons",
                      "components/forms",
                      "components/modals"
                    ]
                  }
                ]
              }
            ]
          },
          
          {
            "tab": "API Reference",
            "dropdowns": [                 // Dropdowns within a tab
              {
                "dropdown": "REST API",
                "icon": "globe",
                "groups": [
                  {
                    "group": "Authentication",
                    "pages": [
                      "api/auth/login",
                      "api/auth/register"
                    ]
                  },
                  {
                    "group": "Users",
                    "pages": [
                      "api/users/create",
                      "api/users/update",
                      "api/users/delete"
                    ]
                  }
                ]
              },
              {
                "dropdown": "GraphQL API",
                "icon": "database",
                "pages": [
                  "api/graphql/queries",
                  "api/graphql/mutations"
                ]
              }
            ]
          },
          
          {
            "tab": "SDKs",
            "groups": [                    // Direct groups within a tab
              {
                "group": "JavaScript",
                "pages": [
                  "sdks/js/installation",
                  "sdks/js/quickstart",
                  "sdks/js/examples"
                ]
              },
              {
                "group": "Python",
                "pages": [
                  "sdks/python/installation",
                  "sdks/python/quickstart",
                  "sdks/python/examples"
                ]
              }
            ]
          },
          
          {
            "tab": "External Resources",   // Tab with external links
            "href": "https://external-resources.com"
          }
        ]
      }
    },
  
    // ===========================================
    // 10. TABS WITH GLOBAL ANCHORS
    // ===========================================
    // Example of tabs combined with global anchors
    tabsWithGlobalAnchors: {
      "navigation": {
        "tabs": [
          {
            "tab": "Tab 1",
            "global": {                    // Global anchors specific to this tab
              "anchors": [
                {
                  "anchor": "Anchor 1",
                  "href": "https://mintlify.com/docs"
                }
              ]
            },
            "groups": [
              {
                "group": "Group 1",
                "pages": [
                  "some-folder/file-1",
                  "another-folder/file-2",
                  "just-a-file"
                ]
              }
            ]
          },
          {
            "tab": "Tab 2",
            "groups": [
              {
                "group": "Group 2",
                "pages": [
                  "some-other-folder/file-1",
                  "various-different-folders/file-2",
                  "another-file"
                ]
              }
            ]
          }
        ]
      }
    },
  
    // ===========================================
    // 11. REAL-WORLD COMPLETE EXAMPLE
    // ===========================================
    // A comprehensive example combining multiple features
    realWorldExample: {
      "navigation": {
        // Global links that appear across all tabs
        "global": {
          "anchors": [
            {
              "anchor": "GitHub",
              "icon": "github",
              "href": "https://github.com/company/repo"
            },
            {
              "anchor": "Discord",
              "icon": "discord",
              "href": "https://discord.gg/company"
            }
          ]
        },
  
        // Version-based navigation
        "versions": [
          {
            "version": "v2.0",
            "tabs": [
              {
                "tab": "Documentation",
                "anchors": [
                  {
                    "anchor": "Getting Started",
                    "icon": "rocket",
                    "groups": [
                      {
                        "group": "Installation",
                        "pages": [
                          "v2/install/npm",
                          "v2/install/yarn",
                          "v2/install/cdn"
                        ]
                      },
                      {
                        "group": "Quick Start",
                        "pages": [
                          "v2/quickstart/basic",
                          "v2/quickstart/advanced"
                        ]
                      }
                    ]
                  },
                  {
                    "anchor": "Guides",
                    "icon": "book",
                    "groups": [
                      {
                        "group": "Authentication",
                        "tag": "UPDATED",
                        "pages": [
                          "v2/guides/auth/setup",
                          "v2/guides/auth/oauth",
                          "v2/guides/auth/jwt"
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "tab": "API Reference",
                "dropdowns": [
                  {
                    "dropdown": "REST API",
                    "icon": "globe",
                    "groups": [
                      {
                        "group": "Endpoints",
                        "pages": [
                          "v2/api/users",
                          "v2/api/posts",
                          "v2/api/comments"
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "version": "v1.0",
            "groups": [
              {
                "group": "Legacy Documentation",
                "pages": [
                  "v1/overview",
                  "v1/installation"
                ]
              }
            ]
          }
        ]
      }
    }
  };
  
  // ===========================================
  // IMPORTANT NOTES:
  // ===========================================
  // 1. Do not use 'api' as a title for any navigation element
  //    The /api path is reserved and will cause 404 errors
  //
  // 2. Page references should point to actual .mdx files in your docs
  //    Example: "quickstart" refers to quickstart.mdx
  //    Example: "advanced/setup" refers to advanced/setup.mdx
  //
  // 3. Icons can be used with anchors and dropdowns for better UX
  //    Common icons: book-open, rocket, globe, github, etc.
  //
  // 4. Tags like "NEW", "BETA", "UPDATED" can be added to groups
  //
  // 5. External links can be used in tabs, anchors, and dropdowns using href
  //
  // 6. Navigation structures can be deeply nested and combined
  //
  // 7. Supported languages for internationalization:
  //    ar, cn, zh-Hant, en, fr, de, id, it, jp, ko, pt, pt-BR, ru, es, tr
  
  export default mintlifyNavigationExamples;