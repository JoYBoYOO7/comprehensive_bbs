export const quesList = [
  {
    question: "The language acceptance of a DFA is given as:",
    options: [
      "$\{w \\in \\Sigma^* | \\delta^*(q0, w) \\in F\}$",
      "$\{w \\in \\Sigma | \\delta^*(q0, w) \\in F\}$",
      "$\{w \\in \\Sigma^\\wedge | \\delta(q0, w) \\in F\}$",
      "$\{w \\in \\Sigma | \\delta(q0, w) \\in F\}$"
    ],
    answer: "$\{w \\in \\Sigma^* | \\delta^*(q0, w) \\in F\}$",
  },
  {
    question: "$(a+b)(cd)^{*}(a+b)$ denotes the following set",
    options: [
      "$\{a(cd)^nb | n >= 1\}$",
      "$\{a(cd)^n | n >= 1\} \\cup \{b(cd)^n | n >= 1\}$",
      "$\{a(cd)^na | n >= 0\} \\cup \{a(cd)^nb | n >= 0\} \\cup \{b(cd)^na | n >= 0\} \\cup \{b(cd)^nb | n >= 0\}$",
      "$\{ac^nd^nb | n >= 1\}$"
    ],
    answer: "$\{a(cd)^na | n >= 0\} \\cup \{a(cd)^nb | n >= 0\} \\cup \{b(cd)^na | n >= 0\} \\cup \{b(cd)^nb | n >= 0\}$",
  },
  {
    question: "What is $\{1,2\}^{*}$ intersection $\{2,3\}^{*}$",
    options: [
      "$\{12,2\}^{*}$",
      "$\{23,2\}^{*}$",
      "$\{2\}^{*}$",
      "$\{12,23\}^{*}$"
    ],
    answer: "$\{2\}^{*}$",
  },
  {
    question: "Which of the following languages over (a, b, c) is accepted by a deterministic PDA?",
    options: [
      "$\{wbw^R | w \\in \{a,c\}^*\}$",
      "$\{ww^R | w \\in \{a,b,c\}^*\}$",
      "$\{a^nb^nc^n | n \\ge 1\}$",
      "$\{w | w \\text{ is a palindrome over } \{a, b, c\}\\}$"
    ],
    answer: "$\{wbw^R | w \\in \{a,c\}^*\}$",
  },
  {
    question: "Is overloading of the function templates allowed in C++?",
    options: [
      "Yes",
      "No",
      "May Be",
      "Can't Say"
    ],
    answer: "Yes",
  },
  {
    question: "What is the output of the following C code snippet? \n`sturct ship\n{\n char paint[10];\n}b1,b2;\nstrcpy(b1.paint,\"RED\");\nprintf(\"%s\", b1.paint);\nb2=b1;\nstrcpy(b2.paint, \"YELLOW\");\nprintf(\"%s\", b1.paint);`",
    options: [
      "YELLOW RED",
      "RED YELLOW",
      "YELLOW YELLOW",
      "RED RED"
    ],
    answer: "RED RED",
  },
  {
    question: "What is the result of the following operation? Top (Push (S, X))",
    options: [
      "X",
      "Null",
      "S",
      "None"
    ],
    answer: "X",
  },
  {
    question: "------is a global communications hub that connects data from all across the world.",
    options: [
      "WWW",
      "HTTP",
      "FTTP",
      "HTML"
    ],
    answer: "WWW",
  },
  {
    question: "The policy for memory hierarchies: L1 data are never found in an L2 cache, refers to",
    options: [
      "Write buffer",
      "Multilevel exclusion",
      "Write-through",
      "Multilevel inclusion"
    ],
    answer: "Multilevel exclusion",
  },
  {
    question: "A visual drawing of the reporting relationships within an organization is called a(n)",
    options: [
      "work specialization chart.",
      "unity of command chart.",
      "organization chart.",
      "division of labour chart."
    ],
    answer: "organization chart.",
  },
  {
    question: "Double Diamond representation in ER diagram",
    options: [
      "weak Entity Set",
      "Total Participation",
      "Strong Entity Set",
      "Complete Entity Set"
    ],
    answer: "weak Entity Set",
  },
  {
    question: "The entity that has a primary key is",
    options: [
      "weak entity",
      "Full Entity",
      "Complete Entity",
      "Strong Entity"
    ],
    answer: "Strong Entity",
  },
  {
    question: "is designed to use the high bandwidth capability of fiber-optic cable.",
    options: [
      "WDM",
      "FDM",
      "TDM",
      "None of the above"
    ],
    answer: "FDM",
  },
  {
    question: "is a model that illustrates how testing activities integrate with software development phases.",
    options: [
      "Waterfall Model",
      "V-Model",
      "Spiral Model",
      "Iterative Model"
    ],
    answer: "V-Model",
  },
  {
    question: "When the project deals with developing a well understood application, then the model is called as",
    options: [
      "Waterfall Model",
      "Spiral Model",
      "COCOMO Model",
      "Agile Model"
    ],
    answer: "Waterfall Model",
  },
  {
    question: "Which model can be selected if a user is involved in all the phases of SDLC?",
    options: [
      "Waterfall Model",
      "Prototyping Model",
      "RAD Model",
      "Build AND Fix Model"
    ],
    answer: "RAD Model",
  },
  {
    question: "The process model that represents a way of thinking that allows businesses and team members to quickly innovate and respond to the dynamic demands of an Organization is",
    options: [
      "Waterfall Model",
      "Incremental Model",
      "RAD Model",
      "Agile Model"
    ],
    answer: "Agile Model",
  },
  {
    question: "Comparison of two results and to make sure its accuracy is a process of",
    options: [
      "Waterfall model",
      "Big Bang model",
      "V-model",
      "Spiral model"
    ],
    answer: "V-model",
  },
  {
    question: "model provide ideas about historical projects",
    options: [
      "Waterfall",
      "Spiral",
      "COCOMO",
      "Incremental"
    ],
    answer: "COCOMO",
  },
  {
    question: "Hospitals, banks, and supermarkets are all linked using which network type?",
    options: [
      "WAN",
      "LAN",
      "BUS",
      "WiFi"
    ],
    answer: "WAN",
  },
  {
    question: "is the system call that has to be invoked by the child to replace the memory image of the child?",
    options: [
      "wait()",
      "sleep()",
      "exec()",
      "exit()"
    ],
    answer: "exec()",
  },
  {
    question: "is the system call that the parent has to invoke in order to avoid creating zombie processes?",
    options: [
      "wait()",
      "Sleep()",
      "exec()",
      "execvp()"
    ],
    answer: "wait()",
  },
  {
    question: "A mistake in software code or configuration that provides an attacker with indirect access to a system or network is called as...",
    options: [
      "Vulnerability",
      "Virus",
      "Trojan Horse",
      "Exposures"
    ],
    answer: "Vulnerability",
  },
  {
    question: "A mistake in the software code that provides an attacker with direct access to a system or network is called as....",
    options: [
      "Vulnerability",
      "Virus",
      "Trojan Horse",
      "Backdoor Attack"
    ],
    answer: "Backdoor Attack",
  },
  {
    question: "A view of database that appears to an application program is known as",
    options: [
      "Virtual table",
      "Schema",
      "Subschema",
      "None of the above"
    ],
    answer: "Subschema",
  },
  {
    question: "Virtual functions work because of",
    options: [
      "Virtual pointer correctly points to Virtual table",
      "Virtual Pointer does not point to virtual table",
      "There is no concept of Virtual table and virtual pointer working mechanism.",
      "Both (b) and (c)"
    ],
    answer: "Virtual pointer correctly points to Virtual table",
  },
  {
    question: "A base class that contain pure virtual function is said be",
    options: [
      "virtual child class",
      "abstract base class",
      "super base class",
      "None of the above"
    ],
    answer: "abstract base class",
  },
  {
    question: "Consider the following statement: `virtual void show() = 0` It is called as",
    options: [
      "Virtual function",
      "Pure virtual function",
      "Syntax Error",
      "Only variable can be equated to Zero; not functions- So it is not supported by C++."
    ],
    answer: "Pure virtual function",
  },
  {
    question: "The term ______ means the redesign of a vertical organization along its horizontal workflows and processes.",
    options: [
      "vertical linkage",
      "vertical network grouping",
      "innovation",
      "reengineering"
    ],
    answer: "reengineering",
  },
  {
    question: "A(n) ______ is a group that is made up of organizationally or geographically dispersed members who are linked primarily through advanced information and communications technologies.",
    options: [
      "vertical linkage",
      "functional department",
      "organisational committee",
      "virtual team"
    ],
    answer: "virtual team",
  },
  {
    question: "Which of the following is a MAC (Mandatory Access Control) feature?",
    options: [
      "Uses levels of security to classify users and data.",
      "Allows owners of documents to determine who has access to specific documents.",
      "Uses access control lists that specify a list of authorized users.",
      "Uses access control lists that specify a list of unauthorized users."
    ],
    answer: "Uses levels of security to classify users and data.",
  },
  {
    question: "Unit testing is done by ?",
    options: [
      "Users",
      "Developers",
      "Customers",
      "None of the mentioned"
    ],
    answer: "Developers",
  },
  {
    question: "Which of the following are components of a database except?",
    options: [
      "User data",
      "Metadata",
      "Reports",
      "Indexes"
    ],
    answer: "Reports",
  },
  {
    question: "The output of the requirement analysis and the requirement specification is used as the input for writing",
    options: [
      "User Acceptance Test Cases",
      "User Rejection Test Cases",
      "Product Rejection Test Cases",
      "Product Acceptance Test Cases"
    ],
    answer: "User Acceptance Test Cases",
  },
  {
    question: "Which of the following is not a good way to protect one's privacy?",
    options: [
      "Use privacy-focused SE",
      "Use private Browser-window",
      "Disable cookies",
      "Uninstall Antivirus"
    ],
    answer: "Uninstall Antivirus",
  },
  {
    question: "To help the operating system estimate LRU, many processors provide a",
    options: [
      "Use bit",
      "Reference bit",
      "Fault bit",
      "Both a and b"
    ],
    answer: "Reference bit",
  },
  {
    question: "Periodically adding, changing and deleting file records is called as File?",
    options: [
      "Updating",
      "Upgrading",
      "Reconstructing",
      "Renewing"
    ],
    answer: "Updating",
  },
  {
    question: "Lean philosophy regards everything not adding value to the customer as",
    options: [
      "Unnecessary",
      "Waste",
      "Useful",
      "Necessary"
    ],
    answer: "Waste",
  },
  {
    question: "______ is the singleness of purpose that makes possible the creation of one plan of action to guide managers in resource allocations.",
    options: [
      "Unity of direction",
      "Unity of command",
      "Unity of resources",
      "Unity of authority"
    ],
    answer: "Unity of direction",
  },
  {
    question: "'The entire organization should be moving towards a common objective in a common direction' this principle is termed as",
    options: [
      "Unity of command",
      "Unity of direction",
      "Unity of group",
      "Unity of management"
    ],
    answer: "Unity of direction",
  },
  {
    question: "Testing the end to end functionality of the system as a whole is defined as",
    options: [
      "Unit Testing",
      "Functional Testing",
      "Stress Testing",
      "Load Testing"
    ],
    answer: "Functional Testing",
  },
  {
    question: "When there is more than one final state in the reduced FA, then its regular expression will contain ______ operator surely",
    options: [
      "unary +",
      "dot",
      "binary +",
      "star"
    ],
    answer: "binary +",
  },
  {
    question: "MIMD classified computers are known as ______ if the processor has high degree of interactions among themselves.",
    options: [
      "UMA",
      "NUMA",
      "Dynamic Memory accessing",
      "Random Memory Accessing"
    ],
    answer: "UMA",
  },
  {
    question: "Decomposing the instruction execution into sub-tasks, each sub-tasks were executed in exclusive unit, all such units operate concurrently, and the defined technique is referred as",
    options: [
      "UMA",
      "DMA",
      "Pipelining",
      "Vector Processing"
    ],
    answer: "Pipelining",
  },
  {
    question: "Which of the following is NOT a network protocol?",
    options: [
      "UDP",
      "TCP",
      "LAN",
      "SMTP"
    ],
    answer: "LAN",
  },
  {
    question: "Finite automata recognizes---grammars",
    options: [
      "type-3",
      "type-1",
      "type-2",
      "type-0"
    ],
    answer: "type-3",
  },
  {
    question: "Regular Expression recognizes --------grammars",
    options: [
      "type-1",
      "type-2",
      "type-3",
      "type-0"
    ],
    answer: "type-3",
  },
  {
    question: "X.25 standards covers how many layers?",
    options: [
      "Two",
      "Three",
      "Seven",
      "Six"
    ],
    answer: "Three",
  },
  {
    question: "When FA M is given which recognizes language L and reverse of L is found by using M then there can be Final states",
    options: [
      "Two",
      "Three",
      "Only one",
      "Any number"
    ],
    answer: "Any number",
  },
  {
    question: "Exception handling is the correlation between",
    options: [
      "try and catch block",
      "retry and recatch block",
      "both (a) and (b)",
      "Neither (a) nor (b)"
    ],
    answer: "try and catch block",
  },
  {
    question: "If L1 and L2 are languages such that L2, L1L2, and L2L1 are all regular, then L1 must be regular.",
    options: [
      "True",
      "False",
      "Can't determined",
      "Neither True and Nor False"
    ],
    answer: "False",
  },
  {
    question: "Regular expressions that do not contain the star operator can represent only finite languages",
    options: [
      "True",
      "False",
      "Can't determined",
      "Neither True and Nor False"
    ],
    answer: "True",
  },
  {
    question: "If R is a regular language and M is a finite language then LUM must be regular language",
    options: [
      "True",
      "False",
      "Can't determined",
      "Neither True and Nor False"
    ],
    answer: "True",
  },
  {
    question: "For every pair of regular expressions r and s, the languages denoted by $r(sr)^{*}$ and $(rs)^{*}r$ are the same.",
    options: [
      "True",
      "False",
      "Can't determined",
      "Neither True and Nor False"
    ],
    answer: "True",
  },
  {
    question: "Attack against availability is",
    options: [
      "Trojan Horse",
      "Malware",
      "VIRUS",
      "DoS"
    ],
    answer: "DoS",
  },
  {
    question: "In ______ each component at lower hierarchy is tested individually and then the components that rely upon these components are tested.",
    options: [
      "Top down testing",
      "Unit testing",
      "Bottom up",
      "Load testing"
    ],
    answer: "Bottom up",
  },
  {
    question: "When a class becomes a friend of another class they are additionally getting access to:",
    options: [
      "Private",
      "Protected",
      "Public",
      "None of the above"
    ],
    answer: "Private",
  },
  {
    question: "Which of these is an application of linked lists?",
    options: [
      "To implement file systems",
      "For separate chaining in hash-tables",
      "To implement non-binary trees",
      "All of these"
    ],
    answer: "All of these",
  },
  {
    question: "Which of the following is an objective of time study?",
    options: [
      "To determine the number of workers to be employed",
      "To formulate suitable incentive schemes",
      "To calculate the labor costs",
      "All of the above"
    ],
    answer: "All of the above",
  },
  {
    question: "Why is it necessary for all employees to sign the Confidentiality and Security Agreement each year?",
    options: [
      "To check if you still work there.",
      "No reason, they just like paperwork.",
      "To remind everyone of what their responsibilities are.",
      "Will be used for moving to a higher position."
    ],
    answer: "To remind everyone of what their responsibilities are.",
  },
  {
    question: "which technique was introduced because a single job could not keep both the CPU and the I/O devices busy?",
    options: [
      "Time-sharing",
      "SPOOLing",
      "Preemptive scheduling",
      "Multiprogramming"
    ],
    answer: "Multiprogramming",
  },
  {
    question: "F.W. Taylor has done the following studies for improving the production process:",
    options: [
      "Time Study, Fatigue Study and Fatal Study.",
      "Time Study, Motion Study and Fatal Study.",
      "Time Study, Motion Study and Fatigue Study.",
      "Time Study, Motivation Study and Fatigue Study."
    ],
    answer: "Time Study, Motion Study and Fatigue Study.",
  },
  {
    question: "Synchronous and Asynchronous data transfer classification is based on",
    options: [
      "Time at which data transfer happens",
      "Type of data transfer occurs",
      "Type of devices connected to them",
      "None of the mentioned options"
    ],
    answer: "Time at which data transfer happens",
  },
  {
    question: "A small span of control decreases employee autonomy through",
    options: [
      "tight supervision.",
      "loose supervision.",
      "biased supervision.",
      "lack of supervision."
    ],
    answer: "tight supervision.",
  },
  {
    question: "Which of the following are objectives of an information systems security program",
    options: [
      "Threats, vulnerabilities, and risks",
      "Security, information value, and threats",
      "Integrity, confidentiality, and availability",
      "Authenticity, vulnerabilities, and costs"
    ],
    answer: "Integrity, confidentiality, and availability",
  },
  {
    question: "Which one of the following is a synchronization tool?",
    options: [
      "Thread",
      "Pipe",
      "Semaphore",
      "Socket"
    ],
    answer: "Semaphore",
  },
  {
    question: "Seek Time is",
    options: [
      "the time taken to locate the disk arm to a specified track where the data is to be read or write.",
      "the time taken by the desired sector of disk to rotate into a position so that it can access the read/write heads",
      "the time to transfer the data.",
      "the time is taken to complete the execution."
    ],
    answer: "the time taken to locate the disk arm to a specified track where the data is to be read or write.",
  },
  {
    question: "Transfer time is ...",
    options: [
      "the time is taken to locate the disk arm to a specified track where the data is to be read or write.",
      "the time is taken by the desired sector of disk to rotate into a position so that it can access the read/write heads.",
      "the time to transfer the data.",
      "the time taken to complete the execution."
    ],
    answer: "the time to transfer the data.",
  },
  {
    question: "Rotational Latency is",
    options: [
      "the time is taken to locate the disk arm to a specified track where the data is to be read or write.",
      "B. the time taken by the desired sector of disk to rotate into a position so that it can access the read/write heads.",
      "the time to transfer the data.",
      "the time is taken to complete the execution."
    ],
    answer: "B. the time taken by the desired sector of disk to rotate into a position so that it can access the read/write heads.",
  },
  {
    question: "Which one of the following languages over the alphabet {a,b} is described by the regular expression: $(a+b)^{*}a(a+b)^{*}a(a+b)^{*}?$",
    options: [
      "The set of all strings containing the substring aa.",
      "The set of all strings containing at most two a's.",
      "The set of all strings containing at least two a's.",
      "The set of all strings that begin and end with either a or b."
    ],
    answer: "The set of all strings containing at least two a's.",
  },
  {
    question: "When the entries in the segment tables of two different processes point to the same physical address then",
    options: [
      "the segments are invalid",
      "the processes get blocked",
      "the address space is invalid",
      "the segments are shared"
    ],
    answer: "the segments are shared",
  },
  {
    question: "When determining the most appropriate form of leadership, which of the following should be considered?",
    options: [
      "The manager.",
      "The work environment.",
      "The group",
      "All the other answers are correct."
    ],
    answer: "All the other answers are correct.",
  },
  {
    question: "Which of the following networks is LEAST likely to be a WAN?",
    options: [
      "The Internet",
      "A school network",
      "A network of bank cash dispensers",
      "Intranet"
    ],
    answer: "A school network",
  },
  {
    question: "Which statement is CORRECT",
    options: [
      "The internal data model represents the data's physical storage details",
      "To communicate with the business user, mainly, the logical data model is used",
      "The logical data model is implementation-independent",
      "A database state contains the description of the database data and is stored in the catalog"
    ],
    answer: "The logical data model is implementation-independent",
  },
  {
    question: "A data dictionary is a special file that contains",
    options: [
      "The Data type of all fields in all files",
      "The name of all fields in all files",
      "The data type of all fields in all files",
      "All of the above"
    ],
    answer: "All of the above",
  },
  {
    question: "The DBMS language component which can be embedded in a program is",
    options: [
      "The data definition language(DDL)",
      "The data manipulation language (DML)",
      "The database administrator (DBA)",
      "A query language"
    ],
    answer: "The data manipulation language (DML)",
  },
  {
    question: "What happens if the base and the derived class contain a definition of a function with the same prototype?",
    options: [
      "The compiler reports an error on compilation.",
      "The only base class function will get called irrespective of the object",
      "Only derived class function will get called irrespective of the object.",
      "The base class object will call the base class function and the derived class object will call the derived class function."
    ],
    answer: "The base class object will call the base class function and the derived class object will call the derived class function.",
  },
  {
    question: "If an item is referenced once, then it again be referenced soon; given statement is stated by",
    options: [
      "Temporary locality",
      "Spatial locality",
      "Temporal locality",
      "Spectral Locality"
    ],
    answer: "Temporal locality",
  },
  {
    question: "An individuals' ability to cooperate with other members of the organization and work effectively in teams is called as",
    options: [
      "Technical skills",
      "Human skills",
      "Conceptual skills",
      "Employee skills"
    ],
    answer: "Human skills",
  },
  {
    question: "A persons' knowledge and ability to make effective use of any process or technique constitutes",
    options: [
      "Technical skills",
      "Human skills",
      "Conceptual skills",
      "Employee skills"
    ],
    answer: "Technical skills",
  },
  {
    question: "Ability of an individual to analyze complex situations and to rationally process and interpret available information is called",
    options: [
      "Technical skills",
      "Human skills",
      "Conceptual skills",
      "Employee skills"
    ],
    answer: "Conceptual skills",
  },
  {
    question: "Which of the following policy includes both end-users and management on how should they respond to security",
    options: [
      "Technical security policies",
      "Administrative security policies",
      "Control policies",
      "None of the mentioned"
    ],
    answer: "Administrative security policies",
  },
  {
    question: "can be applied when the bandwidth of a link (in hertz) is greater than the combined bandwidths of the signals to be transmitted.",
    options: [
      "TDM",
      "FDM",
      "Both TDM or FDM",
      "Neither TDM or FDM"
    ],
    answer: "FDM",
  },
  {
    question: "Which network protocol is often used for gaming?",
    options: [
      "TCP",
      "FTP",
      "UDP",
      "HTTP"
    ],
    answer: "UDP",
  },
  {
    question: "Departmentalization is a process in which",
    options: [
      "Tasks are grouped into jobs",
      "Jobs are grouped into effective work groups",
      "Work groups are grouped into identifiable segments",
      "All the other answers are correct"
    ],
    answer: "All the other answers are correct",
  },
  {
    question: "Activity Bar charts show schedule against",
    options: [
      "task dependencies",
      "calendar time",
      "critical bar chart",
      "defining milestones"
    ],
    answer: "calendar time",
  },
  {
    question: "Which type of software can be used to merge data of two files in one file ?",
    options: [
      "System software",
      "Networking software",
      "Documenting software",
      "Utility Software"
    ],
    answer: "Utility Software",
  },
  {
    question: "McKinsky's 7S framework doesn't include:",
    options: [
      "System",
      "Shared value",
      "Share holders",
      "Staff"
    ],
    answer: "Share holders",
  },
  {
    question: "Nesting of catch block is",
    options: [
      "syntax error",
      "possible in C++",
      "logical error",
      "None of the above"
    ],
    answer: "possible in C++",
  },
  {
    question: "\"Array Index out of range\" is an example for",
    options: [
      "Synchronous exception",
      "Asynchronous exception",
      "Both (a) and (b)",
      "Neither (a) nor (b)"
    ],
    answer: "Synchronous exception",
  },
  {
    question: "Which of the following is a vulnerability in a network environment with discretionary access controls?",
    options: [
      "SYN flood",
      "Impersonation",
      "Denial of service",
      "Birthday attack"
    ],
    answer: "Impersonation",
  },
  {
    question: "Authority always flows from",
    options: [
      "Superior to subordinate",
      "Subordinate to superior",
      "Both Superior to subordinate and Subordinate to superior",
      "None of the other answers is correct"
    ],
    answer: "Superior to subordinate",
  },
  {
    question: "______ of a number from another can be accomplished by adding the complement of the subtrahend to the minuend:",
    options: [
      "Subtraction",
      "Multiply",
      "Divide",
      "All of these"
    ],
    answer: "Subtraction",
  },
  {
    question: "Identify the correct option for multivalued attribute",
    options: [
      "Student Name",
      "Student address",
      "Student Phone number",
      "Student Id number"
    ],
    answer: "Student Phone number",
  },
  {
    question: "The group development stage described as \"Deforming and Mourning\" is",
    options: [
      "Storming",
      "Norming",
      "Performing",
      "Adjourning"
    ],
    answer: "Adjourning",
  },
  {
    question: "Which of the following is not a member of the class?",
    options: [
      "Static function",
      "Friend function",
      "Const function",
      "Virtual function"
    ],
    answer: "Friend function",
  },
  {
    question: "Which of the following is/are White box technique ?",
    options: [
      "Statement Testing",
      "Decision Testing",
      "Condition Coverage",
      "All of the mentioned"
    ],
    answer: "All of the mentioned",
  },
  {
    question: "In the segment table the segment base contains the",
    options: [
      "starting logical address of the process",
      "starting physical address of the segment in the memory",
      "segment offset",
      "segment length"
    ],
    answer: "starting physical address of the segment in the memory",
  },
  {
    question: "An industry having low growth rate, but possess high relative market share. In BCG matrix, its placed in:",
    options: [
      "Stars",
      "Question Marks",
      "Cash cows",
      "Dogs"
    ],
    answer: "Cash cows",
  },
  {
    question: "Because it is difficult to find one single person with all the needed qualities, Taylor suggested the appointment of a specialist through this technique of scientific management. Identify the technique.",
    options: [
      "Standardization and simplification of work",
      "Method study",
      "Functional foremanship",
      "Motion study"
    ],
    answer: "Functional foremanship",
  },
  {
    question: "The address of a page table in memory is stored in",
    options: [
      "stack pointer",
      "page table base register",
      "page register",
      "program counter"
    ],
    answer: "page table base register",
  },
  {
    question: "A memory buffer used to accommodate a speed differential is called",
    options: [
      "stack pointer",
      "cache",
      "accumulator",
      "disk buffer"
    ],
    answer: "cache",
  },
  {
    question: "The data structure required to check whether an expression contains balanced parenthesis is",
    options: [
      "Stack",
      "Queue",
      "Tree",
      "Array"
    ],
    answer: "Stack",
  },
  {
    question: "is very useful in situations when data have to be stored and then retrieved in reverse order.",
    options: [
      "Stack",
      "Queue",
      "List",
      "Linked List"
    ],
    answer: "Stack",
  },
  {
    question: "In a time sharing scheduling algorithm which of the data structure is used?",
    options: [
      "Stack",
      "Queue",
      "Linked list",
      "Circular queue"
    ],
    answer: "Queue",
  },
  {
    question: "Which of the following is referred as part of restricted data structure?",
    options: [
      "Stack",
      "Queue",
      "Linked list",
      "All of these"
    ],
    answer: "All of these",
  },
  {
    question: "To create a dynamic record which is better?",
    options: [
      "Stack",
      "Queue",
      "Linked list",
      "All of these"
    ],
    answer: "Linked list",
  },
  {
    question: "Reverse polish notation is used by",
    options: [
      "Stack",
      "Queue",
      "Linked list",
      "All of these"
    ],
    answer: "Stack",
  },
  {
    question: "Requirement of two pointer is not mandatory in",
    options: [
      "Stack",
      "Queue",
      "Linked list",
      "All of these"
    ],
    answer: "Stack",
  },
  {
    question: "If the data transfers are done asynchronously, which of the data structure is possible?",
    options: [
      "Stack",
      "Queue",
      "Linked list",
      "All of these"
    ],
    answer: "Queue",
  },
  {
    question: "Which principle of general management advocates that \"Employee turnover should be minimized to maintain organizational efficiency.\"?",
    options: [
      "Stability of personnel",
      "Remuneration of employees",
      "Equity",
      "Esprit de Corps"
    ],
    answer: "Stability of personnel",
  },
  {
    question: "The fundamental activity of a process arranged in a linear order of software development paradigm is",
    options: [
      "Spiral model",
      "Big Bang model",
      "V-model",
      "Waterfall model"
    ],
    answer: "Waterfall model",
  },
  {
    question: "A DBMS query language is designed to",
    options: [
      "Specify the structure of a database",
      "Support end users who use english-like commands",
      "Support in the development of complex applications software",
      "All of the above"
    ],
    answer: "All of the above",
  },
  {
    question: "SDLC stands for",
    options: [
      "Software Development Life Cycle",
      "System Development Life cycle",
      "Software Design Life Cycle",
      "System Design Life Cycle"
    ],
    answer: "System Development Life cycle",
  },
  {
    question: "Which of the following is NOT one of the triple bottom line factors of corporate social responsibility?",
    options: [
      "society",
      "environment",
      "economy",
      "culture"
    ],
    answer: "culture",
  },
  {
    question: "A ______ leader avoids power and leaves the group entirely to itself.",
    options: [
      "socialistic",
      "democratic",
      "autocratic",
      "laissez-faire"
    ],
    answer: "laissez-faire",
  },
  {
    question: "Numerous IT organizations collect and gather information in hierarchical structure also manage and monitor files with the help of which protocol?",
    options: [
      "SNMP",
      "Telnet",
      "FTP",
      "SMTP"
    ],
    answer: "SNMP",
  },
  {
    question: "What is the real disadvantage of a linear list of directory entries?",
    options: [
      "size of the linear list in memory",
      "linear search to find a file",
      "it is not reliable",
      "all of the mentioned"
    ],
    answer: "linear search to find a file",
  },
  {
    question: "The VFS (virtual file system) activates file system-specific operations to handle local requests according to their",
    options: [
      "size",
      "commands",
      "timings",
      "file system types"
    ],
    answer: "file system types",
  },
  {
    question: "The Contingency theory focuses on",
    options: [
      "Situational variables",
      "Interrelationships",
      "Groups and human behavior",
      "Economic needs of workers"
    ],
    answer: "Situational variables",
  },
  {
    question: "Leadership which enlists the help of subordinates as a group to solve problems is:",
    options: [
      "Situational",
      "Laissez-faire",
      "participative",
      "employee-oriented"
    ],
    answer: "participative",
  },
  {
    question: "Which of the following is not under the category of Flynn's classification",
    options: [
      "SISD",
      "MIMD",
      "SIMD",
      "None of the mentioned options"
    ],
    answer: "None of the mentioned options",
  },
  {
    question: "Josephus problem is a best example of",
    options: [
      "Singly linked list",
      "Doubly linked list",
      "Circular linked list",
      "All of these"
    ],
    answer: "Circular linked list",
  },
  {
    question: "The attribute age can be a",
    options: [
      "Single Valued",
      "Multi Valued",
      "Derived",
      "Composite"
    ],
    answer: "Derived",
  },
  {
    question: "Which directory implementation is used in most Operating System?",
    options: [
      "Single level directory structure",
      "Two level directory structure",
      "Tree directory structure",
      "Acyclic directory structure"
    ],
    answer: "Tree directory structure",
  },
  {
    question: "Queues serve a major role in",
    options: [
      "Simulation of recursion",
      "Simulation of arbitrary linked list",
      "Simulation of limited resource allocation",
      "All of these"
    ],
    answer: "Simulation of limited resource allocation",
  },
  {
    question: "The interactive transmission of data within a time sharing system may be best suited to",
    options: [
      "simplex lines",
      "half-duplex lines",
      "full duplex lines",
      "diplex-lines"
    ],
    answer: "full duplex lines",
  },
  {
    question: "In ______ transmission, the channel capacity is shared by both communicating devices at all times.",
    options: [
      "simplex",
      "half-duplex",
      "full-duplex",
      "half-simplex"
    ],
    answer: "full-duplex",
  },
  {
    question: "communication modes support two-way traffic but in only one direction at a time?",
    options: [
      "simplex",
      "half duplex",
      "three-quarters duplex",
      "all of the above"
    ],
    answer: "half duplex",
  },
  {
    question: "Memory Address locations are specified using which data representation?",
    options: [
      "Sign-magnitude",
      "one's complement",
      "Unsigned",
      "two's complement"
    ],
    answer: "Unsigned",
  },
  {
    question: "Which are unconditional jumps used in program control are follows:",
    options: [
      "Short jump",
      "Near jump",
      "Far jump",
      "All of these"
    ],
    answer: "All of these",
  },
  {
    question: "The instruct Kernel to do various operations of the calling program and exchange data between the Kernel at the program",
    options: [
      "Shell",
      "Editors",
      "System Calls",
      "Commands"
    ],
    answer: "System Calls",
  },
  {
    question: "TCP/IP MODEL DOES NOT HAVE ______ LAYER BUT OSI MODEL HAVE THIS LAYER.",
    options: [
      "SESSION LAYER",
      "PRESENTATION LAYER",
      "APPLICATION LAYER",
      "Both Session and Presentation layer"
    ],
    answer: "Both Session and Presentation layer",
  },
  {
    question: "Dialogue control and Token management are responsibility of which OSI Layer",
    options: [
      "session layer",
      "network layer",
      "transport layer",
      "data link layer"
    ],
    answer: "session layer",
  },
  {
    question: "A dataStore in DFD represents",
    options: [
      "Sequential File",
      "Disk Store",
      "Repository of Data",
      "a Random Access Memory"
    ],
    answer: "Repository of Data",
  },
  {
    question: "The access mode of Magnetc Disk is",
    options: [
      "Sequential access",
      "Random access",
      "Associative access",
      "SemiRandom access"
    ],
    answer: "Random access",
  },
  {
    question: "When a program tries to access a page that is mapped in address space but not loaded in physical memory, then",
    options: [
      "segmentation fault occurs",
      "fatal error occurs",
      "page fault occurs",
      "no error occurs"
    ],
    answer: "page fault occurs",
  },
  {
    question: "In the Internet stack, the protocol data unit (PDU) for the application layer is",
    options: [
      "Segment",
      "Datagram",
      "Message",
      "Frame"
    ],
    answer: "Message",
  },
  {
    question: "The assignment of individual duties and responsibilities is most appropriately described in which of the following documents?",
    options: [
      "Security policy",
      "Enforcement guidelines",
      "Acceptable use policy",
      "Program manual"
    ],
    answer: "Security policy",
  },
  {
    question: "Which of the following ways should organizations use to protect personal information?",
    options: [
      "Security clearances and access restrictions on a \"need-to-know\" basis are examples of organizational measures.",
      "Technological measures, for example, the use of passwords and encryption.",
      "Physical measures, for example, shredding documents and locking desk drawers.",
      "All of the these"
    ],
    answer: "All of the these",
  },
  {
    question: "Highest level of Maslow's Hierarchy is",
    options: [
      "Security",
      "Physiological",
      "Esteem",
      "Self- Actualization"
    ],
    answer: "Self- Actualization",
  },
  {
    question: "What should a project manager do or follow to ensure clear boundaries for project completion?",
    options: [
      "Scope verification",
      "Completing a scope statement",
      "scope definition",
      "Risk management plan"
    ],
    answer: "Completing a scope statement",
  },
  {
    question: "Max Weber belongs to which school of Management thought?",
    options: [
      "Scientific",
      "Administrative",
      "Bureaucratic",
      "Human relations"
    ],
    answer: "Bureaucratic",
  },
  {
    question: "\"The Hawthorne Experiments\" are related to",
    options: [
      "Scientific Management",
      "Administrative Management",
      "Human Relations School",
      "Bureaucratic Organization"
    ],
    answer: "Human Relations School",
  },
  {
    question: "Choose an internal software quality from given below:",
    options: [
      "scalability",
      "usability",
      "reusability",
      "reliability"
    ],
    answer: "reusability",
  },
  {
    question: "The technique of storing the previously calculated values is called?",
    options: [
      "Saving value property",
      "Storing value property",
      "Memoization",
      "Mapping"
    ],
    answer: "Memoization",
  },
  {
    question: "Which of the following firms has NOT been exposed for ethical abuses and corrupt conduct?",
    options: [
      "Satyam Computers",
      "Lehman Brothers",
      "Enron",
      "General Electric(GE)"
    ],
    answer: "General Electric(GE)",
  },
  {
    question: "Lower and upper limits are present in which chart?",
    options: [
      "Run chart",
      "Bar chart",
      "Control chart",
      "None of the mentioned"
    ],
    answer: "Control chart",
  },
  {
    question: "Which one of the following model enables frequent changes to data permissions?",
    options: [
      "Rule-based",
      "List-based",
      "Role-based",
      "Ticket based"
    ],
    answer: "Role-based",
  },
  {
    question: "Frames from one LAN can be transmitted to another LAN via the device",
    options: [
      "Router",
      "Bridge",
      "Repeater",
      "Modem"
    ],
    answer: "Bridge",
  },
  {
    question: "Legitimate power is based on the subordinate's perception that the leader has a right to exercise influence because of the leader's",
    options: [
      "role or position within the organisation.",
      "expertise and knowledge.",
      "personal characteristics and personality.",
      "ability to punish or reward."
    ],
    answer: "role or position within the organisation.",
  },
  {
    question: "In length instruction some programs wants a complex instruction set containingmore instruction, more addressing modes and greater address rang, as in case of",
    options: [
      "RISC",
      "CISC",
      "Both",
      "None"
    ],
    answer: "CISC",
  },
  {
    question: "Which network topology is the most common way of setting up a network?",
    options: [
      "Ring",
      "Bus",
      "Star",
      "Mesh"
    ],
    answer: "Star",
  },
  {
    question: "A cost benefit analysis involves measurable metrics such as",
    options: [
      "Revenue earned or costs",
      "Quality or costs",
      "Benefits or costs",
      "None of the above"
    ],
    answer: "Benefits or costs",
  },
  {
    question: "in the code are signs of bad code designs and should be avoided.",
    options: [
      "Repetitions",
      "Modularity",
      "Functions",
      "Documentation"
    ],
    answer: "Repetitions",
  },
  {
    question: "RTM stands for",
    options: [
      "Repeated Trade Matrix",
      "Redundant Trace Module",
      "Robust Test Mechanism",
      "Requirement traceability matrix"
    ],
    answer: "Requirement traceability matrix",
  },
  {
    question: "Through this principle of management, Henri Fayol guides the managers to exhibit exemplary behaviour and advises that they should not fall into the temptation of misusing their powers for personal benefit at the cost of the general interest of the organization. Which principle of management is being described in the above statement?",
    options: [
      "Remuneration of employees",
      "Centralization and decentralization",
      "Subordination of individual interest to general interest",
      "Equity"
    ],
    answer: "Subordination of individual interest to general interest",
  },
  {
    question: "begins at the root and follows a path down to the specified file.",
    options: [
      "Relative path name",
      "Absolute path name",
      "Standalone name",
      "All of the above"
    ],
    answer: "Absolute path name",
  },
  {
    question: "Company (cid, name, department). Here, the 'name' is a ______ and 'Company' is a ______",
    options: [
      "Relation, Attribute",
      "Attribute, Relation",
      "Tuple, Relation",
      "Tuple, Attribute"
    ],
    answer: "Attribute, Relation",
  },
  {
    question: "Consider the following languageL $=\{a^{\\wedge}nb^{\\wedge}n|n>=1\}$ L is",
    options: [
      "regular",
      "CFL but not regular",
      "type 0 language but not type 1",
      "CSL but not CFL"
    ],
    answer: "CFL but not regular",
  },
  {
    question: "is triggered by modifications, migration or retirement of existing software.",
    options: [
      "Regression Testing",
      "Unit Testing",
      "Maintenance testing",
      "Integration Testing"
    ],
    answer: "Maintenance testing",
  },
  {
    question: "Databases overall structure is maintained in a file called",
    options: [
      "Redolog File",
      "Data file",
      "Control file",
      "All"
    ],
    answer: "Control file",
  },
  {
    question: "A problem is said to be decidable if it is a ______",
    options: [
      "recursively enumerable",
      "recursive",
      "context-sensitive",
      "None of the choices."
    ],
    answer: "recursive",
  },
  {
    question: "A relationship between the instances of a single entity type is called",
    options: [
      "Recursive relationship",
      "Ternary relationship",
      "Binary relationship",
      "None of these"
    ],
    answer: "Recursive relationship",
  },
  {
    question: "Create a rectangle object with a width of 5 and a height of 12.",
    options: [
      "Rectangle r= new Rectangle(5,10)",
      "Rectangle r= new Rectangle(5,12)",
      "Student r= new Student(5,12)",
      "Student r= new Rectangle(5,12)"
    ],
    answer: "Rectangle r= new Rectangle(5,12)",
  },
  {
    question: "RAD Software process model stands for",
    options: [
      "Rapid Application Development.",
      "Relative Application Development",
      "Rapid Application Design",
      "Recent Application Development."
    ],
    answer: "Rapid Application Development.",
  },
  {
    question: "Linked list uses",
    options: [
      "Random memory allocation",
      "Static memory allocation",
      "Fixed memory allocation",
      "Dynamic memory allocation"
    ],
    answer: "Dynamic memory allocation",
  },
  {
    question: "Which of the following RAID levels gives the striping at the Block level and double distributed parity for address both speed and fault tolerance issue.",
    options: [
      "RAID 10",
      "RAID 2",
      "RAID 6",
      "RAID 5"
    ],
    answer: "RAID 6",
  },
  {
    question: "are used for cellular phone, satellite, and wireless LAN communications.",
    options: [
      "Radio waves",
      "Infrared waves",
      "Microwaves",
      "None of the above"
    ],
    answer: "Radio waves",
  },
  {
    question: "are used for short-range communications such as those between a PC and a peripheral device.",
    options: [
      "Radio waves",
      "Infrared waves",
      "Microwaves",
      "none of the above"
    ],
    answer: "Infrared waves",
  },
  {
    question: "In a circular queue, the value of r will be",
    options: [
      "r=r+1",
      "r =(r+1)%[queue_size-1]",
      "r =(r+1)%queue_size",
      "r=(r-1)%queue_size"
    ],
    answer: "r =(r+1)%queue_size",
  },
  {
    question: "Which of the following regular expression identity is true?",
    options: [
      "$|r(*)=r^{*}$",
      "$(r^{*}s^{*})^{*}=(r+s)^{*}$",
      "$(r+s)^{*}=r^{*}+s^{*}$",
      "r*s*=r*+s*"
    ],
    answer: "$(r^{*}s^{*})^{*}=(r+s)^{*}$",
  },
  {
    question: "Which of the following algorithm shows better best-case complexity?",
    options: [
      "Quick sort",
      "Insertion sort",
      "Merge sort",
      "Selection sort"
    ],
    answer: "Insertion sort",
  },
  {
    question: "Which data structure is used for implementing recursion?",
    options: [
      "Queue",
      "Stack",
      "Arrays",
      "List"
    ],
    answer: "Stack",
  },
  {
    question: "Which of the following is the transition function of a NFA?",
    options: [
      "$Q \\times \\Sigma --> Q$",
      "$Q \\times \\Sigma --> 2^{\\wedge}Q$",
      "$Q \\times \\Sigma --> 2^{\\wedge}Q-1$",
      "Qx∑U {epsilon}--> $2^{\\wedge}Q$"
    ],
    answer: "$Q \\times \\Sigma --> 2^{\\wedge}Q$",
  },
  {
    question: "Which of the following operation take worst-case linear time in the array implementation of the stack?",
    options: [
      "Push",
      "Pop",
      "IsEmpty",
      "None"
    ],
    answer: "None",
  },
  {
    question: "Which of the following one can relate to the statement: If x items are put into y containers, with x>y, then at least one container must contain more than one item.",
    options: [
      "Pumping Lemma",
      "Pigeon Hole Principle",
      "Counting principle",
      "None"
    ],
    answer: "Pigeon Hole Principle",
  },
  {
    question: "What is the output of the following C code?\n`void main()\n{\n char *pt=NULL;\n char *p=0;\n if(pt)\n  printf(\"PT\");\n else\n  printf(\"Nullvlauept\");\n if(p)\n  printf(\"P\");\n else\n  printf(\"Nullvlauep\");\n}`",
    options: [
      "PT P",
      "Nullvlauept P",
      "PT Nullvlauep",
      "Nullvlauept Nullvlauep"
    ],
    answer: "Nullvlauept Nullvlauep",
  },
  {
    question: "The ______ must design and program the overlay structure.",
    options: [
      "programmer",
      "system architect",
      "system designer",
      "system analyst"
    ],
    answer: "programmer",
  },
  {
    question: "CPU fetches the instruction from memory according to the value of",
    options: [
      "program counter",
      "status register",
      "instruction register",
      "program status word"
    ],
    answer: "program counter",
  },
  {
    question: "The logical file system maintains structures consisting of information about a file...",
    options: [
      "Program counter",
      "file control block",
      "Process control block",
      "file pointer"
    ],
    answer: "file control block",
  },
  {
    question: "The mechanism in which I/O device is accessed by continuous monitoring its status using status flag is referred as",
    options: [
      "Program-controlled I/O",
      "Memory mapped I/O",
      "I/O mapped I/O",
      "Interrupt driven I/O"
    ],
    answer: "Program-controlled I/O",
  },
  {
    question: "Which of the following does NOT describe a problem with scientific management?",
    options: [
      "Production increases may not be reflected in workers' pay",
      "It is better suited to complex jobs.",
      "Improvement is not necessarily maintainable.",
      "It is better suited to simple jobs."
    ],
    answer: "It is better suited to simple jobs.",
  },
  {
    question: "A software process is a set of related activities that gives outcome to the ______ of the software",
    options: [
      "Production",
      "Engineeing",
      "Sales",
      "None of the above"
    ],
    answer: "Production",
  },
  {
    question: "DMA transfer is initiated by ______ of the following",
    options: [
      "Processor",
      "The process being executed",
      "I/O devices",
      "Operating System"
    ],
    answer: "I/O devices",
  },
  {
    question: "Virtual memory technique facilitates sharing of memory among",
    options: [
      "processes",
      "threads",
      "instructions",
      "programs"
    ],
    answer: "processes",
  },
  {
    question: "A(n) ______ is the unit of work in a system.",
    options: [
      "Process",
      "Operating System",
      "Timer",
      "Mode bit"
    ],
    answer: "Process",
  },
  {
    question: "The primary or first component of DFD is known as",
    options: [
      "Process",
      "Data",
      "Square",
      "Entity"
    ],
    answer: "Entity",
  },
  {
    question: "Which is not the application of queue?",
    options: [
      "Printing jobs",
      "Process waiting",
      "Function nesting",
      "Network packet forwarding"
    ],
    answer: "Function nesting",
  },
  {
    question: "The following is not a principle of organisation.",
    options: [
      "Principle of exception",
      "Principle of balance",
      "Principle of complexity",
      "Principle of co-ordination"
    ],
    answer: "Principle of complexity",
  },
  {
    question: "Which of the following represents the rights inherent in a managerial position to give orders and expect them to be obeyed?",
    options: [
      "Power",
      "Authority",
      "Influence",
      "Responsibility"
    ],
    answer: "Authority",
  },
  {
    question: "A Lecturer is an Employee.\" This statement can best describe which object orientation concept?",
    options: [
      "Polymorphism",
      "Inheritance",
      "Encapsulation",
      "Generalization"
    ],
    answer: "Inheritance",
  },
  {
    question: "In the linked list, each node contains a minimum of two fields. One field is the data field to store the data second field is?",
    options: [
      "Pointer to character",
      "Pointer to integer",
      "Pointer to node",
      "Node"
    ],
    answer: "Pointer to node",
  },
  {
    question: "Documents that outline how goals are to be accomplished are called",
    options: [
      "Plans",
      "Goals",
      "Strategies",
      "Ideas"
    ],
    answer: "Plans",
  },
  {
    question: "Which is used to speed-up the processing:",
    options: [
      "Pipeline",
      "Vector processing",
      "Both",
      "None"
    ],
    answer: "Both",
  },
  {
    question: "Which is a method of decomposing a sequential process into sub operations:",
    options: [
      "Pipeline",
      "CISC",
      "RISC",
      "Database"
    ],
    answer: "Pipeline",
  },
  {
    question: "The ______ model defines the stored data structures in terms of the database model used.",
    options: [
      "Physical level",
      "Conceptual level",
      "External level",
      "None of these"
    ],
    answer: "Conceptual level",
  },
  {
    question: "The address generated by the CPU is referred to as",
    options: [
      "Physical address",
      "Logical address",
      "Neither physical nor logical",
      "Network Address"
    ],
    answer: "Logical address",
  },
  {
    question: "In which attack, text messages (other than email) are used for hacking personal information?",
    options: [
      "Phishing",
      "Moshing",
      "Vishing",
      "Smishing"
    ],
    answer: "Smishing",
  },
  {
    question: "In which attack, phone calls are used for hacking personal information?",
    options: [
      "Phishing",
      "Moshing",
      "Vishing",
      "Smishing"
    ],
    answer: "Vishing",
  },
  {
    question: "In which attack, email is used for hacking personal information?",
    options: [
      "Phishing",
      "Moshing",
      "Vishing",
      "Smishing"
    ],
    answer: "Phishing",
  },
  {
    question: "Hofstede's framework is regarding",
    options: [
      "Personality",
      "Culture",
      "Perception",
      "Stereotype"
    ],
    answer: "Culture",
  },
  {
    question: "An over-generalized, oversimplified, and self-perpetuating belief about people's personal characteristics is known as",
    options: [
      "Perception",
      "Stereotype",
      "Attribution",
      "Personality"
    ],
    answer: "Stereotype",
  },
  {
    question: "The process of perceiving the causes of behavior and outcomes is termed as",
    options: [
      "Perception",
      "Stereotype",
      "Attribution",
      "Personality"
    ],
    answer: "Attribution",
  },
  {
    question: "An organisation establishes relationships among",
    options: [
      "People, work, and resources",
      "Customer, work, and resources",
      "People, work, and management",
      "Customer, work, and management"
    ],
    answer: "People, work, and resources",
  },
  {
    question: "What should you do with someone's personal data once you've finished using it?",
    options: [
      "Pass it on to someone else",
      "Throw it out.",
      "Give it back to the owner.",
      "Securely delete or destroy it."
    ],
    answer: "Securely delete or destroy it.",
  },
  {
    question: "The ______ style of leadership describes a leader who tends to involve employees in decision making, delegate authority, encourage participation in deciding work methods and goals, and uses feedback as an opportunity for coaching employees.",
    options: [
      "participative",
      "autocratic",
      "democratic",
      "laissez-faire"
    ],
    answer: "democratic",
  },
  {
    question: "What are all candidate keys, other than the primary keys called?",
    options: [
      "Partial keys",
      "Alternate keys",
      "Superkey keys",
      "None of these"
    ],
    answer: "Alternate keys",
  },
  {
    question: "Which of the following application generally use a stack?",
    options: [
      "Parenthesis balancing program",
      "Syntax analyzer in compiler",
      "Keeping track of local variables at run time",
      "All of the above"
    ],
    answer: "All of the above",
  },
  {
    question: "In program control the instruction is set for the statement in a:",
    options: [
      "Parallel",
      "Sequence",
      "Both",
      "None"
    ],
    answer: "Sequence",
  },
  {
    question: "is the concept in which a process is copied into main memory from the secondary memory according to the requirement.",
    options: [
      "Paging",
      "Demand paging",
      "Segmentation",
      "Swapping"
    ],
    answer: "Demand paging",
  },
  {
    question: "In memory management, a technique called as paging, physical memory is broken into fixed-sized blocks called",
    options: [
      "Pages",
      "Frames",
      "Blocks",
      "Segments"
    ],
    answer: "Frames",
  },
  {
    question: "Effective access time is directly proportional to",
    options: [
      "page read/write time",
      "hit ratio",
      "memory access time",
      "page-fault rate"
    ],
    answer: "page-fault rate",
  },
  {
    question: "Integrates business firewall capabilities with an intrusion prevention system (IPS) and application control using a multi-layered approach known as",
    options: [
      "Packet-filtering firewall",
      "Stateful Inspection firewall",
      "Application-level firewall",
      "Next-Generation firewall"
    ],
    answer: "Next-Generation firewall",
  },
  {
    question: "Which of the below is a network sniffer tool?",
    options: [
      "Packet Tracer",
      "WireShark",
      "Network Simulator 2",
      "TinyOS"
    ],
    answer: "WireShark",
  },
  {
    question: "Which of the following is true",
    options: [
      "P is a subset of NP",
      "NP is a subset of P",
      "P and NP are equal",
      "NP is a subset of NP-hard"
    ],
    answer: "P is a subset of NP",
  },
  {
    question: "That an enterprise must behave as a good citizen is an example of its responsibility towards:",
    options: [
      "owners.",
      "workers.",
      "consumers.",
      "community."
    ],
    answer: "community.",
  },
  {
    question: "A language that can generate the new data types is known as ______ languages as they can handle the new data types",
    options: [
      "Overloaded",
      "Encapsulated",
      "Reprehensible",
      "Extensible"
    ],
    answer: "Extensible",
  },
  {
    question: "The number of subordinates a superior can effectively handle is called",
    options: [
      "Organising people",
      "Span of control",
      "Direction",
      "Coordination"
    ],
    answer: "Span of control",
  },
  {
    question: "Which of the following are parts of any organisation given by Mintzberg?",
    options: [
      "Operating core",
      "Strategic apex",
      "Middle line",
      "All of the above"
    ],
    answer: "All of the above",
  },
  {
    question: "Which of the following statement(s) is/are correct?\nS1: When Bjarne stroustrup designed C++, there is no such concept of exception handling.\nS2: Exception handling is a new feature added to ANSI C++; not available in earlier compilers.",
    options: [
      "Only S1",
      "Only S2",
      "Neither S1 nor S2",
      "Both S1 and S2"
    ],
    answer: "Both S1 and S2",
  },
  {
    question: "How many classes can be defined in a single program",
    options: [
      "Only 1",
      "Only 100",
      "Only 999",
      "As many as you want"
    ],
    answer: "As many as you want",
  },
  {
    question: "In an inverted page table scheme",
    options: [
      "One page table is used in a system",
      "One page table for each process is used in a system",
      "One page table for each file is used in a system",
      "One page table for each program is used in a system"
    ],
    answer: "One page table is used in a system",
  },
  {
    question: "The clause to automatically delete the entire rows in the child table on deletion of the Parent key in the parent table is",
    options: [
      "On Delete Set Null",
      "On Delete Cascade",
      "On Delete Update",
      "As many as you want"
    ],
    answer: "On Delete Cascade",
  },
  {
    question: "In an inverted page table scheme",
    options: [
      "One page table is used in a system",
      "One page table for each process is used in a system",
      "One page table for each file is used in a system",
      "One page table for each program is used in a system"
    ],
    answer: "One page table is used in a system",
  },
  {
    question: "The clause to automatically delete the entire rows in the child table on deletion of the Parent key in the parent table is",
    options: [
      "On Delete Set Null",
      "On Delete Cascade",
      "On Delete Update",
      "All the given options are wrong"
    ],
    answer: "On Delete Cascade",
  },
  {
    question: "The clause to set the foreign key field to null in the child table on deletion of the corresponding parent key in the parent table is",
    options: [
      "On Delete Cascade",
      "On Delete Restrict",
      "On Delete Update",
      "On Delete Set Null"
    ],
    answer: "On Delete Set Null",
  },
  {
    question: "In FIFO page replacement algorithm, when a page must be replaced",
    options: [
      "oldest page is chosen",
      "newest page is chosen",
      "random page is chosen",
      "first page is chosen"
    ],
    answer: "oldest page is chosen",
  },
  {
    question: "Which number are used extensively in microprocessor work:",
    options: [
      "Octal",
      "Hexadecimal",
      "Both",
      "None of these"
    ],
    answer: "Hexadecimal",
  },
  {
    question: "Which of the following adopts a top-down approach?",
    options: [
      "Object-Oriented Programming",
      "Procedural Programming",
      "Pure - Object-Oriented Programming",
      "none"
    ],
    answer: "Procedural Programming",
  },
  {
    question: "What is the complexity of quick sort algorithm, if the array to be sorted is already in sorted order?",
    options: [
      "$O(n^{2})$",
      "O(nlogn)",
      "Constant",
      "$O(n)$"
    ],
    answer: "$O(n^{2})$",
  },
  {
    question: "What is the time complexity of the given function?\n`function(){\n int i=1, s=1;\n while(s <= n){\n  i++;\n  s=s+i;\n  printf(\"hello\");\n }\n}`",
    options: [
      "O(n)",
      "O(n^2)",
      "$O(\\sqrt{n})$",
      "O(nlogn)"
    ],
    answer: "$O(\\sqrt{n})$",
  },
  {
    question: "What is the minimum complexity to perform sorting on an array of n elements?",
    options: [
      "$O(n logn)$",
      "$O(n)$",
      "$O(n+logn)$",
      "$O(logn)$"
    ],
    answer: "$O(n logn)$",
  },
  {
    question: "Correct relationship",
    options: [
      "$O(log n)<O(n)<O(n^{*}log n)<O(2^{\\wedge}n)<O(n^{\\wedge}2)$",
      "$O(n)<O(log n)<O(n^{*}log n)<O(2^{\\wedge}n)<O(n^{\\wedge}2)$",
      "$O(n)<O(log n)<O(n^{*}log n)<O(n^{\\wedge}2)<O(2^{\\wedge}n)$",
      "$O(log n)<O(n)<O(n^{*}log n)<O(n^{\\wedge}2)<O(2^{\\wedge}n)$"
    ],
    answer: "$O(log n)<O(n)<O(n^{*}log n)<O(n^{\\wedge}2)<O(2^{\\wedge}n)$",
  },
  {
    question: "Which of the following holds true for the relation? $a_n = 2a_{n-1} + 1$, $a_1=1$",
    options: [
      "$O(2^n)$",
      "$\\theta(2^n)$",
      "$\\Omega(2^n)$",
      "None of these"
    ],
    answer: "$\\theta(2^n)$",
  },
  {
    question: "What would be the asymptotic time complexity to insert an element at the second position in the linked list?",
    options: [
      "O(1)",
      "O(n)",
      "O(n^2)",
      "None"
    ],
    answer: "O(1)",
  },
  {
    question: "the file system allows the same system call interface (the API) to be used for different types of file systems.",
    options: [
      "NTFS",
      "EXT2",
      "VFS(virtual file system)",
      "DOS"
    ],
    answer: "VFS(virtual file system)",
  },
  {
    question: "In a Page replacement algorithm, which of the following type of page is the best page to replace.",
    options: [
      "not recently used but modified",
      "recently used but clean",
      "neither recently used nor modified",
      "recently used and modified"
    ],
    answer: "neither recently used nor modified",
  },
  {
    question: "Page fault occurs when the referenced page is",
    options: [
      "not in main memory",
      "not in secondary memory",
      "not in tertiary memory",
      "not in shared memory"
    ],
    answer: "not in main memory",
  },
  {
    question: "WHICH LAYER IS RESPONSIBLE FOR PROCESS TO PROCESS DELIVERY?",
    options: [
      "NETWORK LAYER",
      "TRANSPORT LAYER",
      "SESSION LAYER",
      "DATA LINK LAYER"
    ],
    answer: "TRANSPORT LAYER",
  },
  {
    question: "End-to-end connectivity is provided from host-to-host in:",
    options: [
      "Network layer",
      "Session layer",
      "Transport layer",
      "Datalink layer"
    ],
    answer: "Transport layer",
  },
  {
    question: "Routing is performed by ______ in OSI architecture",
    options: [
      "network layer",
      "data link layer",
      "transport layer",
      "session layer"
    ],
    answer: "network layer",
  },
  {
    question: "Assume we have an object called Employee. Which of the following best represent this object's identity?",
    options: [
      "Name",
      "Staff ID",
      "Date of Birth",
      "Address"
    ],
    answer: "Staff ID",
  },
  {
    question: "Which of the following is suitable to be considered as an object?",
    options: [
      "Name",
      "Email",
      "Transaction",
      "Quantity"
    ],
    answer: "Transaction",
  },
  {
    question: "A complete graph can have",
    options: [
      "n^2 spanning trees",
      "$n^{\\wedge}(n-2)$ spanning trees",
      "$n^{\\wedge}(n+2)$ spanning trees",
      "$n^{\\wedge}(n+2)$ spanning trees"
    ],
    answer: "$n^{\\wedge}(n-2)$ spanning trees",
  },
  {
    question: "Given an arbitrary non-deterministic finite automaton (NFA) with N states, the maximum number of states in an equivalent minimized DFA is at least.",
    options: [
      "$N^{\\wedge}2$",
      "$2^{\\wedge}N$",
      "N!",
      "2N"
    ],
    answer: "$2^{\\wedge}N$",
  },
  {
    question: "Let w be any string of length n in {a, b}* Consider 'L' be the set of all strings ending with at least n a's. What is the minimum number of states in non deterministic finite automata that accept 'L'?",
    options: [
      "n+3",
      "n+1",
      "n",
      "2n"
    ],
    answer: "n+1",
  },
  {
    question: "How many undirected graphs (not necessarily connected) can be constructed out of a given set V = {v1,v2,...vn} of n vertices?",
    options: [
      "$n(n-1)/2$",
      "$2^{\\wedge}n$",
      "2n!",
      "$2^{\\wedge}(n(n-1)/2)$"
    ],
    answer: "$2^{\\wedge}(n(n-1)/2)$",
  },
  {
    question: "In synchronous TDM, for n signal sources of the same data rate, each frame contains ______ slots.",
    options: [
      "n+1",
      "n-1",
      "10 to n",
      "n"
    ],
    answer: "n",
  },
  {
    question: "If there are N routers from source to destination, total end to end delay in sending packet P (L->number of bits in the packet R-> transmission rate)",
    options: [
      "N",
      "$(N^{*}L)/R$",
      "$(2N^{*}L)/R$",
      "$L/R$"
    ],
    answer: "$(N^{*}L)/R$",
  },
  {
    question: "Imposing a total ordering of all resource types, and ensuring process requests resources in an increasing order of enumeration voilates the ______ condition for deadlock",
    options: [
      "Mutual exclusion",
      "Hold and Wait",
      "Circular Wait",
      "No Preemption"
    ],
    answer: "Circular Wait",
  },
  {
    question: "Ensuring that processes release the resources if they are not able to acquire the resources requested violates ______ condition for deadlock",
    options: [
      "Mutual exclusion",
      "Hold and Wait",
      "Circular Wait",
      "No Preemption"
    ],
    answer: "No Preemption",
  },
  {
    question: "Which of the following is not a limitation of the binary search algorithms?",
    options: [
      "must use a sorted array",
      "requirement of the sorted array is expensive when a lot of insertion and deletions are needed",
      "there must be a mechanism to access the middle element directly",
      "the binary search algorithm is not efficient when the data elements are more than 1500"
    ],
    answer: "the binary search algorithm is not efficient when the data elements are more than 1500",
  },
  {
    question: "The recognizing capabilities of NDFSM and DFSM",
    options: [
      "must be same",
      "may be different",
      "must be different",
      "none of the answers given"
    ],
    answer: "must be same",
  },
  {
    question: "Which algorithm is used to find GCD of two integers:",
    options: [
      "Multiplication algorithm",
      "Division algorithm",
      "Addition Algorithm",
      "Simple algorithm"
    ],
    answer: "Division algorithm",
  },
  {
    question: "The ______ is used to overcome the contention over the BUS possession and usage.",
    options: [
      "Multiple BUS structure",
      "Single BUS Structure",
      "BUS Optimizers",
      "BUS arbitrator"
    ],
    answer: "BUS arbitrator",
  },
  {
    question: "This technique of scientific management helps in the development of the concept of the assembly line, which is widely used in automobile companies these days as well. Identify the technique.",
    options: [
      "Motion study",
      "Standardization and simplification of work",
      "Method study",
      "Time study"
    ],
    answer: "Method study",
  },
  {
    question: "Working set model for page replacement is based on the assumption of",
    options: [
      "Modularity of references",
      "Working Set Size",
      "Locality of references",
      "Random access"
    ],
    answer: "Locality of references",
  },
  {
    question: "Single inheritance, Multiple inheritance, and Aggregation comes under.",
    options: [
      "Modularity",
      "Typing",
      "Hierarchy",
      "None of the mentioned"
    ],
    answer: "Hierarchy",
  },
  {
    question: "A software object's behavior is exposed through",
    options: [
      "methods",
      "encapsulation",
      "abstraction",
      "inheritance"
    ],
    answer: "methods",
  },
  {
    question: "The objective of this technique of scientific management is to reduce a given line or a product to fixed type sizes and characteristics. Name the technique.",
    options: [
      "Method study",
      "Differential piece wage system",
      "Standardization and simplification of work",
      "Functional foremanship"
    ],
    answer: "Standardization and simplification of work",
  },
  {
    question: "Class contains.",
    options: [
      "Members",
      "data types",
      "variables",
      "all of them"
    ],
    answer: "all of them",
  },
  {
    question: "The Diffie-Hellman key exchange is vulnerable to which of the following attacks?",
    options: [
      "Meet-in-the-middle attack",
      "Man-in-the-middle attack",
      "Phishing attack",
      "Snooping"
    ],
    answer: "Man-in-the-middle attack",
  },
  {
    question: "The ______ theory states a manager's choice of organizational structures and control systems depends on the characteristics of the external environment.",
    options: [
      "Mechanistic",
      "Management science",
      "Organic",
      "Contingency"
    ],
    answer: "Contingency",
  },
  {
    question: "N Ach, N Aff and N Pow are related",
    options: [
      "McClelland's Learned Needs",
      "ERG theory",
      "Justice Theory",
      "Equity theory"
    ],
    answer: "McClelland's Learned Needs",
  },
  {
    question: "Frustration-Regression is related to",
    options: [
      "Maslow's Hierarchy",
      "ERG theory",
      "Justice Theory",
      "Equity theory"
    ],
    answer: "ERG theory",
  },
  {
    question: "Which of the following term is the practice of hiding data in graphic, audio, or other text file?",
    options: [
      "Masking",
      "Steganography",
      "Cryptography",
      "None of the choices"
    ],
    answer: "Steganography",
  },
  {
    question: "In which access control model, there are sets of elements which have greatest lower bound of values and the least upper bound of values?",
    options: [
      "Mandatory model",
      "Discretionary model",
      "Lattice model",
      "Rule model"
    ],
    answer: "Lattice model",
  },
  {
    question: "Which access control type has a central authority that determines what objects people have access to depending on their role or organizational security policy?",
    options: [
      "Mandatory Access Control",
      "Discretionary Access Control",
      "Non-Discretionary Access Control",
      "Rule-based Access control"
    ],
    answer: "Mandatory Access Control",
  },
  {
    question: "Which one of the following is an application of Stack Data Structure?",
    options: [
      "Managing function calls",
      "The stock span problem",
      "Arithmetic expression evaluation",
      "All of these"
    ],
    answer: "All of these",
  },
  {
    question: "A ______ is a data communication system within a building, plant, or campus, or between nearby buildings.",
    options: [
      "MAN",
      "LAN",
      "WAN",
      "None of the above"
    ],
    answer: "LAN",
  },
  {
    question: "Which type of attack requires multiple handler on various system?",
    options: [
      "Man in the Middle Attack",
      "DoS",
      "DDoS",
      "Backdoor Attack"
    ],
    answer: "DDoS",
  },
  {
    question: "Which detects user activity on the internet and sends the data to a third party in the background?",
    options: [
      "Malware",
      "Adware",
      "Spyware",
      "Security treat"
    ],
    answer: "Spyware",
  },
  {
    question: "Example for Associative type of memory",
    options: [
      "Main Memory",
      "Cache Memory",
      "Magnetic",
      "Optical"
    ],
    answer: "Cache Memory",
  },
  {
    question: "Which of the following is the most accurate description of an access control method that allows the data owner to develop and manage access control?",
    options: [
      "MACs (Mandatory Access Control)",
      "RBACS (Role-Based Access Control)",
      "LBACS (List Based Access Control)",
      "DACs (Discretionary Access Control)"
    ],
    answer: "DACs (Discretionary Access Control)",
  },
  {
    question: "When we concatenate two languages L1 and L2 recognized by machine M1 and M2 we obtain a machine with final state same as that of",
    options: [
      "M1 or M2",
      "M1",
      "M1 and M2",
      "M2"
    ],
    answer: "M2",
  },
  {
    question: "While selecting a string w such that w belongs to L, where L is a regular language, and W = mno. Which of the following parts cannot be an empty string?",
    options: [
      "m",
      "n",
      "o",
      "no"
    ],
    answer: "n",
  },
  {
    question: "If there is a complete DFA M1 recognizing a language L1 and has m states out of which two are final states then the machine M recognizing L1 complement will have ______ final states.",
    options: [
      "m",
      "m+2",
      "2",
      "m-2"
    ],
    answer: "m-2",
  },
  {
    question: "The decompositions R1(AC),R2(AB) with the function dependency F = {C->A, A->B} is",
    options: [
      "Lossless",
      "Lossy",
      "Neither Lossless or Lossy",
      "All the given options are wrong"
    ],
    answer: "Lossy",
  },
  {
    question: "Which sublayer of the data link layer performs data link functions that depend upon the type of medium?",
    options: [
      "logical link control sublayer",
      "media access control sublayer",
      "network interface control sublayer",
      "none of the mentioned"
    ],
    answer: "media access control sublayer",
  },
  {
    question: "Program always deals with",
    options: [
      "logical address",
      "absolute address",
      "physical address",
      "relative address"
    ],
    answer: "logical address",
  },
  {
    question: "Which of the following must you do if a laptop holding client account information is stolen?",
    options: [
      "Log the breach immediately with the DPO",
      "Notify the individuals concerned if their rights or freedoms are at risk",
      "Notify your manager",
      "Notify the regulators"
    ],
    answer: "Notify the individuals concerned if their rights or freedoms are at risk",
  },
  {
    question: "The word ______ refers to the portion of a ______ that carries a transmission.",
    options: [
      "line; channel",
      "channel; link",
      "link; channel",
      "line; link"
    ],
    answer: "link; channel",
  },
  {
    question: "A reporting relationship in which an employee receives orders from, and reports to, only one supervisor is known as:",
    options: [
      "Line of authority",
      "Unity of direction",
      "Unity of command",
      "Responsibility"
    ],
    answer: "Unity of command",
  },
  {
    question: "In Mintzberg's management roles, the role that describes ethical guidelines and the principles of behavior employees are to follow in their dealings with customers and suppliers is",
    options: [
      "Liaison",
      "Figurehead",
      "Monitor",
      "Disseminator"
    ],
    answer: "Figurehead",
  },
  {
    question: "Context Diagram is also known as",
    options: [
      "Level 2 DFD",
      "Level 1 DFD",
      "Level 3 DFD",
      "Level 0 DFD"
    ],
    answer: "Level 0 DFD",
  },
  {
    question: "In an optical fiber, the inner core is ______ the cladding.",
    options: [
      "less dense than",
      "denser than",
      "the same density as",
      "another name for"
    ],
    answer: "denser than",
  },
  {
    question: "The page replacement algorithm that suffers highly from Belady's anamoly is",
    options: [
      "Least Recently Used",
      "Most Frequently Used",
      "First In First Out",
      "Least Frequently Used"
    ],
    answer: "First In First Out",
  },
  {
    question: "The garbage can model is related to",
    options: [
      "Leadership",
      "Learning",
      "Decision making",
      "Recruitment"
    ],
    answer: "Decision making",
  },
  {
    question: "Empty stack top pointer indicates to",
    options: [
      "Last memory location",
      "Set to 1",
      "Set to -1",
      "Beginning of memory location"
    ],
    answer: "Set to -1",
  },
  {
    question: "If L1 and L2 are CFL and R a regular set, one of the languages below is not necessarily a CFL. which one?",
    options: [
      "L1nL2",
      "L1nR",
      "L1L2",
      "L1UL2"
    ],
    answer: "L1nL2",
  },
  {
    question: "Leaders that focus on production and the job's technical aspects are:",
    options: [
      "job-centred",
      "laissez-faire",
      "general",
      "autocratic"
    ],
    answer: "job-centred",
  },
  {
    question: "Leaders that focus on the individuality and personality needs of their employees and emphasize building good interpersonal relationships are:",
    options: [
      "job-centred",
      "laissez-faire",
      "employee-oriented",
      "task-oriented"
    ],
    answer: "employee-oriented",
  },
  {
    question: "Which of the following statements regarding inline functions is correct?",
    options: [
      "It speeds up execution.",
      "It slows down execution.",
      "It increases the code size.",
      "It increases the code size and length."
    ],
    answer: "It speeds up execution.",
  },
  {
    question: "A process is thrashing if",
    options: [
      "it is spending more time paging than executing",
      "it is spending less time paging than executing",
      "page fault occurs",
      "swapping cannot take place"
    ],
    answer: "it is spending more time paging than executing",
  },
  {
    question: "The intersection of CFL and regular language",
    options: [
      "Is always regular and context free",
      "Is always regular",
      "Need not be regular",
      "IS always context free"
    ],
    answer: "IS always context free",
  },
  {
    question: "What will be printed?\n`#include<stdio.h>\nmain(){\n int myFunction(){\n  return 1;\n }\n printf(\"%d\", myFunction());\n}`",
    options: [
      "Invalid function definition",
      "myFunction() should be defined outside main method",
      "1",
      "10"
    ],
    answer: "myFunction() should be defined outside main method",
  },
  {
    question: "High-speed of I/O data transfer is possible by using ______ mechanism",
    options: [
      "Interrupt driven I/O",
      "Program - controlled I/O",
      "DMA",
      "Memory mapped I/O"
    ],
    answer: "DMA",
  },
  {
    question: "Which database level is closest to the users?",
    options: [
      "Internal",
      "Physical",
      "Conceptual",
      "External"
    ],
    answer: "External",
  },
  {
    question: "Which of the two features match each other",
    options: [
      "Inheritance and Encapsulation",
      "Encapsulation and Polymorphism",
      "Encapsulation and Abstraction",
      "Abstraction and Polymorphism"
    ],
    answer: "Encapsulation and Abstraction",
  },
  {
    question: "Which of the three pillars of digital privacy does not apply?",
    options: [
      "Information privacy",
      "Individual privacy",
      "Communication privacy",
      "Family privacy"
    ],
    answer: "Family privacy",
  },
  {
    question: "What is split horizon?",
    options: [
      "Information about a route should not be sent back in the direction from which the original update came.",
      "It splits the traffic when you have a large bus (horizon) physical network.",
      "It holds the regular updates from broadcasting to a downed link.",
      "It prevents regular update messages from reinstating a route that has gone down."
    ],
    answer: "Information about a route should not be sent back in the direction from which the original update came.",
  },
  {
    question: "The pager is concerned with the",
    options: [
      "individual page of a process",
      "entire process",
      "entire thread",
      "first page of a process"
    ],
    answer: "individual page of a process",
  },
  {
    question: "How often should your data be backed up?",
    options: [
      "In accordance with your organization's backup policy",
      "Once a fortnight.",
      "Once a month.",
      "Once a week."
    ],
    answer: "In accordance with your organization's backup policy",
  },
  {
    question: "Which statement is NOT CORRECT?",
    options: [
      "In a database approach, the maintenance of data and metadata is easier",
      "In a database approach, applications do not have their own files, but all applications access the same version of the data by interfacing with the DBMS",
      "In a database approach, there is typically less storage needed compared to the file approach",
      "In a database approach, the data definitions or metadata are stored in the applications accessing the data."
    ],
    answer: "In a database approach, the data definitions or metadata are stored in the applications accessing the data.",
  },
  {
    question: "Which of the following statement/statements is/are TRUE, with respect to vectored interrupts?",
    options: [
      "In vectored interrupt, device identifies itself to the processor by sending the starting address of the service routine.",
      "Code sent by the vectored interrupt are upto 32 bits",
      "In vectored interrupt starting address sent by the device to identify itself is referred as \"service location\"",
      "All the mentioned options"
    ],
    answer: "All the mentioned options",
  },
  {
    question: "Hardware solution to the critical section problem using test&set:\n`while (true) {\n while (TestAndSet (&lock)); /* do nothing */\n // critical section\n lock = FALSE;\n // remainder section\n}`",
    options: [
      "Implements mutual exclusion and progress",
      "Implements only mutual exclusion",
      "Implements progress and bounded waiting.",
      "Implements mutual exclusion and bounded waiting."
    ],
    answer: "Implements mutual exclusion and progress",
  },
  {
    question: "Hardware solution to the critical section problem using swap:\n`while(true) {\n key = TRUE;\n while(key==TRUE)\n  Swap(&lock, &key);\n //critical section\n lock = FALSE;\n //remainder section\n}`",
    options: [
      "Implements mutual exclusion and progress",
      "Implements only mutual exclusion",
      "Implements progress and bounded waiting.",
      "Implements mutual exclusion and bounded waiting."
    ],
    answer: "Implements mutual exclusion and progress",
  },
  {
    question: "In which addressing the operand is actually present in instruction:",
    options: [
      "Immediate addressing",
      "Direct addressing",
      "Register addressing",
      "None of the above"
    ],
    answer: "Immediate addressing",
  },
  {
    question: "In which mode the main memory location holds the EA of the operand:",
    options: [
      "Immediate addressing",
      "Direct addressing",
      "Register addressing",
      "Indirect addressing"
    ],
    answer: "Indirect addressing",
  },
  {
    question: "Which of the following ISO standards is typically used as a framework for network communications?",
    options: [
      "IEEE",
      "802.1X",
      "Ethernet",
      "OSI/RM"
    ],
    answer: "OSI/RM",
  },
  {
    question: "The device used for providing secured remote access is ...",
    options: [
      "IDS",
      "IPS",
      "Firewall",
      "VPN"
    ],
    answer: "VPN",
  },
  {
    question: "The device used to block unauthorized access to your network is",
    options: [
      "IDS",
      "Firewall",
      "IPS",
      "VPN"
    ],
    answer: "Firewall",
  },
  {
    question: "The encryption methodology is used in.",
    options: [
      "IDS",
      "Firewall",
      "Host",
      "VPN"
    ],
    answer: "VPN",
  },
  {
    question: "is the type of discretionary access control (DAC) model which is based on an individual's identity.",
    options: [
      "Identity-based Access control",
      "Rule-based Access control",
      "Non-Discretionary Access Control",
      "Lattice-based Access control"
    ],
    answer: "Identity-based Access control",
  },
  {
    question: "Match the following:\ni. Breadth-first search a. Heap\nii. Depth-first search b. Stack\niii. Sorting c. Queue",
    options: [
      "i-a ii-b iii-c",
      "i-c ii-b iii-a",
      "i-c ii-a iii-b",
      "i-a ii-b iii-c"
    ],
    answer: "i-c ii-b iii-a",
  },
  {
    question: "In regular language pumping lemma, w= mn^io belongs to L then i ranges from?",
    options: [
      "i>=0",
      "i<=0",
      "i>=1",
      "i<0"
    ],
    answer: "i>=0",
  },
  {
    question: "The easiest form of offline password hash attack which can be used for capturing insecure passwords is?",
    options: [
      "Hybrid",
      "Dictionary",
      "Brute-force",
      "Man-in-the-middle"
    ],
    answer: "Dictionary",
  },
  {
    question: "Traits or skills on which leaders differ from non-leaders include:",
    options: [
      "Honesty and integrity",
      "Self-confidence",
      "Drive and desire to lead",
      "All the other options are correct"
    ],
    answer: "All the other options are correct",
  },
  {
    question: "Find the correct order in Exception Handling:",
    options: [
      "Hit-Throw - Catch-Handle",
      "Hit-catch-Throw-Handle",
      "Handle-Throw-Catch-Hit",
      "Hit-Catch-Handle-Throw"
    ],
    answer: "Hit-Throw - Catch-Handle",
  },
  {
    question: "The subtraction of hit rate (1-hit rate) is known as",
    options: [
      "Hit time",
      "Miss penalty",
      "Miss rate",
      "Cache"
    ],
    answer: "Miss rate",
  },
  {
    question: "In an organic structure, formalisation is",
    options: [
      "high.",
      "low.",
      "moderate.",
      "absent."
    ],
    answer: "low.",
  },
  {
    question: "In a mechanistic structure, there is",
    options: [
      "high formalisation.",
      "low formalisation.",
      "no formalisation.",
      "cross-functional formalisation."
    ],
    answer: "high formalisation.",
  },
  {
    question: "Where an object of a class gets stored?",
    options: [
      "Heap",
      "Stack",
      "Disk",
      "File"
    ],
    answer: "Heap",
  },
  {
    question: "The process of accessing data stored in a serial access memory is similar to manipulating data on a",
    options: [
      "Heap",
      "Binary Tree",
      "Array",
      "Stack"
    ],
    answer: "Stack",
  },
  {
    question: "What is another way to describe a parent-child relationship?",
    options: [
      "Has-A",
      "Is-A",
      "Does-A",
      "Gets-A"
    ],
    answer: "Is-A",
  },
  {
    question: "The MMU is a",
    options: [
      "Hardware",
      "Software",
      "Malware",
      "None of the given choices"
    ],
    answer: "Hardware",
  },
  {
    question: "A high-level document which defines the management plan in detail for how security should be practiced throughout the organization is called?",
    options: [
      "Guidelines",
      "Policies",
      "Procedures",
      "Standards"
    ],
    answer: "Policies",
  },
  {
    question: "The number of states in DFA is ______ than the number of states in NFA for the same Language.",
    options: [
      "greater equal",
      "less",
      "Greater",
      "equal"
    ],
    answer: "greater equal",
  },
  {
    question: "Who are the organisational stakeholders?",
    options: [
      "Government",
      "Employees",
      "Customers",
      "All the other answers are correct."
    ],
    answer: "All the other answers are correct.",
  },
  {
    question: "What is Address Binding?",
    options: [
      "going to an address in memory",
      "locating an address with the help of another address",
      "binding two addresses together to form a new address in a different memory space",
      "a mapping from one address space to another"
    ],
    answer: "a mapping from one address space to another",
  },
  {
    question: "The weak entity set can be converted to the strong entity set by",
    options: [
      "Generalisation",
      "Aggregation",
      "Composition",
      "Adding appropriate attributes"
    ],
    answer: "Adding appropriate attributes",
  },
  {
    question: "What is the output of the following C code?\n`void main() {\n struct paint{\n  int type;\n  int color;\n }p1, p2;\n p1.type = 1;\n p1.color = 5;\n if(sizeof(p1)==sizeof(p2)) {\n  printf(\"SAME\");\n } else {\n  printf(\"DIFFERENT\");\n }\n return 0;\n}`",
    options: [
      "Garbage value",
      "DIFFERENT",
      "Compiler error",
      "SAME"
    ],
    answer: "SAME",
  },
  {
    question: "means people are organized according to what the organization produces.",
    options: [
      "Functional grouping",
      "Divisional grouping",
      "Multi-focused grouping",
      "Horizontal grouping"
    ],
    answer: "Divisional grouping",
  },
  {
    question: "Which is/are the application(s) of stack",
    options: [
      "Function calls",
      "Large number Arithmetic",
      "Evaluation of arithmetic expressions",
      "All of these"
    ],
    answer: "All of these",
  },
  {
    question: "A department can be created by",
    options: [
      "function",
      "product",
      "process",
      "All the other answers are correct"
    ],
    answer: "All the other answers are correct",
  },
  {
    question: "Which of the following TCP/IP protocol is used for transferring electronic mail messages from one machine to another?",
    options: [
      "FTP",
      "SNMP",
      "SMTP",
      "RPC"
    ],
    answer: "SMTP",
  },
  {
    question: "Leadership is the process whose important ingredient is the ______ exercised by the leaders on the group members.",
    options: [
      "friendship",
      "loyalty",
      "trust",
      "influence"
    ],
    answer: "influence",
  },
  {
    question: "Memory management technique in which system stores and retrieves data from secondary storage for use in main memory is called",
    options: [
      "fragmentation",
      "paging",
      "mapping",
      "spooling"
    ],
    answer: "paging",
  },
  {
    question: "Group development stages in the order are",
    options: [
      "Forming, Performing, Storming, Norming, Adjourning",
      "Forming, Norming, Storming, Performing, Adjourning",
      "Forming, Norming, Performing, Storming, Adjourning",
      "Forming, Storming, Norming, Performing, Adjourning"
    ],
    answer: "Forming, Storming, Norming, Performing, Adjourning",
  },
  {
    question: "Does an algorithm solve the all-pair shortest path problem ?",
    options: [
      "Floyd's algorithm",
      "Prim's algorithm",
      "Dijkstra's algorithm",
      "Warshall's algorithm"
    ],
    answer: "Floyd's algorithm",
  },
  {
    question: "Which approach recognises that there is no optimal organisational design?",
    options: [
      "Flexible",
      "Virtual",
      "Contingency",
      "Boundaryless"
    ],
    answer: "Contingency",
  },
  {
    question: "Which of the following properties is associated with a queue?",
    options: [
      "First In Last Out",
      "First In First Out",
      "Last In First Out",
      "None"
    ],
    answer: "First In First Out",
  },
  {
    question: "The algorithm which chooses the page that has not been used for the longest period of time is",
    options: [
      "First in first out algorithm",
      "Least recently used algorithm",
      "Additional reference bit algorithm",
      "Counting based page replacement algorithm"
    ],
    answer: "Least recently used algorithm",
  },
  {
    question: "Which is used for predicting virus?",
    options: [
      "Firewall",
      "CWE",
      "IPS",
      "Exposures"
    ],
    answer: "Exposures",
  },
  {
    question: "The lexical analysis for a modern language such as Java needs the power of which one of the following machine models in a necessary and sufficient sense?",
    options: [
      "Finite state automata",
      "Nondeterministic -pushdown automata",
      "Deterministic pushdown automata",
      "Turing machine"
    ],
    answer: "Finite state automata",
  },
  {
    question: "When there are infinite distinguishable strings then there cannot be a",
    options: [
      "finite automata",
      "automata",
      "regular expression",
      "both finite automata and regular expression"
    ],
    answer: "both finite automata and regular expression",
  },
  {
    question: "Finite state machine are not able to recognize Palindromes because:",
    options: [
      "Finite automata cannot deterministically find the midpoint",
      "Finite automata cannot remember arbitarily large amount of data",
      "Even if the mid point is known, it cannot find whether the second half matches the first",
      "All of the mentioned"
    ],
    answer: "All of the mentioned",
  },
  {
    question: "Which of the following claims about DAC (Discretionary Access Control) is correct?",
    options: [
      "Files that don't have an owner CANNOT be modified.",
      "The administrator of the system is the owner of each object.",
      "The operating system is the owner of each object.",
      "Each object has an owner, which has full control over the object."
    ],
    answer: "Each object has an owner, which has full control over the object.",
  },
  {
    question: "Which of the following true about FILE *fp",
    options: [
      "FILE is a keyword in C for representing files and fp is a variable of FILE type.",
      "FILE is a stream",
      "FILE is a buffered stream",
      "FILE is a structure and fp is a pointer to the structure of FILE type"
    ],
    answer: "FILE is a structure and fp is a pointer to the structure of FILE type",
  },
  {
    question: "It is through ______ that group members can be inspired, motivated, and guided to be successful and productive.",
    options: [
      "fellowship",
      "sportsmanship",
      "coercion",
      "leadership"
    ],
    answer: "leadership",
  },
  {
    question: "The theorist who advocated standard methodology for doing a task and suggested that workers were motivated by pay according to output (piecework) is",
    options: [
      "Fayol",
      "Taylor",
      "Mintzberg",
      "Mayo"
    ],
    answer: "Taylor",
  },
  {
    question: "Which data model is independent of both hardware and DBMS?",
    options: [
      "External",
      "Internal",
      "Conceptual",
      "All of these"
    ],
    answer: "Conceptual",
  },
  {
    question: "In expectancy theory, the belief that effort will lead to performance is termed as",
    options: [
      "Expectancy",
      "Instrumentality",
      "Valence",
      "Values"
    ],
    answer: "Expectancy",
  },
  {
    question: "In expectancy theory, value of rewards is termed as",
    options: [
      "Expectancy",
      "Instrumentality",
      "Valence",
      "Values"
    ],
    answer: "Valence",
  },
  {
    question: "In expectancy theory, the belief that performance leads to rewards is termed as",
    options: [
      "Expectancy",
      "Instrumentality",
      "Valence",
      "Values"
    ],
    answer: "Instrumentality",
  },
  {
    question: "Which of the following is TRUE?",
    options: [
      "Every finite subset of a non-regular set is regular",
      "Every subset of a regular set is regular",
      "Infinite union of finite sets is regular",
      "The union of two non-regular sets is not regular"
    ],
    answer: "Every finite subset of a non-regular set is regular",
  },
  {
    question: "What is the fastest type of network connection?",
    options: [
      "Ethernet",
      "Mobile data",
      "Fiber optics",
      "WiFi"
    ],
    answer: "Fiber optics",
  },
  {
    question: "Which one of the following is not a step in planning?",
    options: [
      "Establishing objectives",
      "Developing premises",
      "Determining alternative courses",
      "Identifying needs of employees"
    ],
    answer: "Identifying needs of employees",
  },
  {
    question: "Guess the output of the following C code:\n`#include <stdio.h>\nmain(){\n typedef char arr[4];\n arr arr1[4];\n printf(\"%d\",sizeof(arr1));\n}`",
    options: [
      "Error",
      "4",
      "44",
      "16"
    ],
    answer: "16",
  },
  {
    question: "Which of the following is a project scheduling method that can be applied to software development?",
    options: [
      "EPM",
      "CPM",
      "CMM",
      "NONE OF THE ABOVE"
    ],
    answer: "CPM",
  },
  {
    question: "Name, Age, Date of Birth, Mail id are examples of",
    options: [
      "Entities",
      "Attributes",
      "Relationship",
      "Descriptors"
    ],
    answer: "Attributes",
  },
  {
    question: "The condition that signals the binary search is unsuccessful is,",
    options: [
      "END<BEG+2",
      "END>BEG",
      "END<BEG",
      "$END=BEG$"
    ],
    answer: "END<BEG",
  },
  {
    question: "Scientific Management is related to",
    options: [
      "Elton Mayo",
      "Henry Fayol",
      "FW Taylor",
      "Max Weber"
    ],
    answer: "FW Taylor",
  },
  {
    question: "Administrative Management is related to",
    options: [
      "Elton Mayo",
      "Henry Fayol",
      "FW Taylor",
      "Max Weber"
    ],
    answer: "Henry Fayol",
  },
  {
    question: "Human Relations School is related to",
    options: [
      "Elton Mayo",
      "Henry Fayol",
      "FW Taylor",
      "Max Weber"
    ],
    answer: "Elton Mayo",
  },
  {
    question: "EA stands for",
    options: [
      "Effective add",
      "Effective absolute",
      "Effective address",
      "End address"
    ],
    answer: "Effective address",
  },
  {
    question: "Operating System maintains the page table for",
    options: [
      "each process",
      "each thread",
      "each instruction",
      "each address"
    ],
    answer: "each process",
  },
  {
    question: "DSDM stands for",
    options: [
      "Dynamic systems development method",
      "Dynamic solutions development method",
      "Database systems development method",
      "Database solutions development method"
    ],
    answer: "Dynamic systems development method",
  },
  {
    question: "The ______ technique expands the bandwidth of a signal by replacing each data bit with n bits.",
    options: [
      "DSSS",
      "FHSS",
      "FDM",
      "TDM"
    ],
    answer: "DSSS",
  },
  {
    question: "A context-free language L= {w | w is a palindrome} can be accepted by",
    options: [
      "DPDA",
      "NPDA",
      "DFA",
      "NFA"
    ],
    answer: "NPDA",
  },
  {
    question: "When a state in a FA has self loop its regular expression will have",
    options: [
      "dot",
      "star",
      "binary+",
      "unary+"
    ],
    answer: "star",
  },
  {
    question: "Which of the following is a leadership trait?",
    options: [
      "Dominance",
      "energy",
      "cognitive ability",
      "All the other answers are correct"
    ],
    answer: "All the other answers are correct",
  },
  {
    question: "Relationship set in ER diagram",
    options: [
      "Divided Rectangle",
      "Non Divided Rectangle",
      "Line",
      "Diamond"
    ],
    answer: "Diamond",
  },
  {
    question: "Prims algorithm is based on",
    options: [
      "Divide and conquer method",
      "Dynamic programming",
      "Greedy method",
      "Branch and bound"
    ],
    answer: "Greedy method",
  },
  {
    question: "Which of the following is TRUE, with respect to RAID 5,",
    options: [
      "Distributed Parity",
      "Minimum number of Disks required is 3",
      "High hardware cost for implementation",
      "All the mentioned options"
    ],
    answer: "All the mentioned options",
  },
  {
    question: "The attributions that emphasize some aspect of the individual, such as ability or skill, to explain behavior is termed as",
    options: [
      "Dispositional Attributions",
      "Situational Attributions",
      "Event Attributions",
      "Skill Attributions"
    ],
    answer: "Dispositional Attributions",
  },
  {
    question: "Attributions that emphasize the environment's effect on behavior is called",
    options: [
      "Dispositional Attributions",
      "Situational Attributions",
      "Event Attributions",
      "Skill Attributions"
    ],
    answer: "Situational Attributions",
  },
  {
    question: "The technique of differential piece rate system was developed by Taylor to",
    options: [
      "Discriminate between efficient and inefficient workers",
      "Reward the efficient worker",
      "Motivate the inefficient workers to perform better",
      "All of the above"
    ],
    answer: "All of the above",
  },
  {
    question: "Which access control model can be suited for bank teller application?",
    options: [
      "Discretionary",
      "Mandatory",
      "Role-based",
      "Rule-based"
    ],
    answer: "Role-based",
  },
  {
    question: "Which one of the following access controls defined based on the use of labels?",
    options: [
      "Discretionary",
      "Mandatory",
      "Role-based",
      "Nondiscretionary"
    ],
    answer: "Mandatory",
  },
  {
    question: "The application of this principle of management leads to higher production and better work for the same effort. Identify the related principle of general management.",
    options: [
      "Discipline",
      "Equity",
      "Division of work",
      "Unity of command"
    ],
    answer: "Division of work",
  },
  {
    question: "Which of the following standard algorithms is not a Greedy algorithm?",
    options: [
      "Dijkstra's shortest path algorithm",
      "Prim's algorithm",
      "Kruskal algorithm",
      "Bellmen Ford Shortest path algorithm"
    ],
    answer: "Bellmen Ford Shortest path algorithm",
  },
  {
    question: "is concerned with the safety of a person's personal information while accessing the Internet on any computer or mobile device.",
    options: [
      "Digital agony",
      "Digital privacy",
      "Digital secrecy",
      "Digital protection"
    ],
    answer: "Digital privacy",
  },
  {
    question: "Find the shortest path from the root to a given node v. Which algorithm would one use to find this shortest path?",
    options: [
      "DFS",
      "BFS",
      "Either BFS or DFS",
      "The statement is incomplete"
    ],
    answer: "BFS",
  },
  {
    question: "Which of the following statement is true?",
    options: [
      "DFA is more powerful than NFA",
      "NFA and DFA have equal power",
      "NFA is more powerful than DFA",
      "All options are true"
    ],
    answer: "NFA and DFA have equal power",
  },
  {
    question: "White Box techniques are also classified as",
    options: [
      "Design based testing",
      "Structural testing",
      "Error guessing technique",
      "None of the mentioned"
    ],
    answer: "Structural testing",
  },
  {
    question: "Which of the following symmetric block cipher supports multiple key sizes?",
    options: [
      "DES",
      "AES",
      "Double DES",
      "Triple DES"
    ],
    answer: "AES",
  },
  {
    question: "In the graph traversing, Stack is useful for which searching algorithm?",
    options: [
      "Depth first search",
      "Breadth first search",
      "In-order search",
      "Pre-order search"
    ],
    answer: "Depth first search",
  },
  {
    question: "Which of these expresses the specific number of entity occurrences associated with one occurrence of the related entity?",
    options: [
      "Degree of relationship",
      "Connectivity of relationship",
      "Cardinality of relationship",
      "None of these"
    ],
    answer: "Cardinality of relationship",
  },
  {
    question: "Which of the following properties are necessary for an Algorithm?",
    options: [
      "Definiteness",
      "Correctness",
      "Effectiveness",
      "A and C"
    ],
    answer: "A and C",
  },
  {
    question: "Lean Development follows the principle of",
    options: [
      "Decide as late as possible",
      "Deliver as late as possible",
      "Decide as early as possible",
      "Not building integrity"
    ],
    answer: "Decide as late as possible",
  },
  {
    question: "If the characters 'D' 'C' 'B' 'A' are placed in a queue (in that order), and then removed one at a time, in what order will they be removed?",
    options: [
      "DCAB",
      "ABCD",
      "ABDC",
      "DCBA"
    ],
    answer: "DCBA",
  },
  {
    question: "What does DPIA expand as?",
    options: [
      "Data Privacy Impact Assessment",
      "Data Protection Impact Assessment",
      "Data Privacy Identification Assessment",
      "Data Protection Identification Assessment"
    ],
    answer: "Data Protection Impact Assessment",
  },
  {
    question: "The process in DFD is represented as",
    options: [
      "Data Flow",
      "Data Store",
      "External Entity",
      "Bubble Symbol"
    ],
    answer: "Bubble Symbol",
  },
  {
    question: "Which of the following is NOT a valid access control mechanism?",
    options: [
      "DAC (Discretionary Access Control) list.",
      "SAC (Subjective Access Control) list.",
      "MAC (Mandatory Access Control) list.",
      "RBAC (Role-Based Access Control) list."
    ],
    answer: "SAC (Subjective Access Control) list.",
  },
  {
    question: "DFD stands for",
    options: [
      "Data Flow Diagram",
      "Dependent Flow diagram",
      "Decomposition Flow Diagram",
      "Decision Flow Diagram"
    ],
    answer: "Data Flow Diagram",
  },
  {
    question: "What is actually passed if you pass a structure variable to a function?",
    options: [
      "Copy of structure variable",
      "Reference of structure variable",
      "Starting address of structure variable",
      "Ending address of structure variable"
    ],
    answer: "Copy of structure variable",
  },
  {
    question: "The three major methods of allocating disk space that are in wide use are",
    options: [
      "contiguous",
      "linked",
      "indexed",
      "all of the mentioned"
    ],
    answer: "all of the mentioned",
  },
  {
    question: "Which of the following condition is used to transmit two packets over a medium at the same time?",
    options: [
      "Contention",
      "Collision",
      "Synchronous",
      "Asynchronous"
    ],
    answer: "Collision",
  },
  {
    question: "A leader uses ______ when giving the individual or group the authority and responsibility to decide.",
    options: [
      "consultatiom",
      "laissez-faire",
      "joint decision",
      "delegation"
    ],
    answer: "delegation",
  },
  {
    question: "Which of the following is element of the database?",
    options: [
      "Constraints and schema",
      "Relationships",
      "Data",
      "All of these"
    ],
    answer: "All of these",
  },
  {
    question: "Aditi has a reputation of being fair, helpful, and understanding. She even helped her subordinate overcome a personal crisis. Which one of the following dimensions of leadership is Aditi displaying here?",
    options: [
      "consideration",
      "initiating structure",
      "employee orientation",
      "task orientation"
    ],
    answer: "consideration",
  },
  {
    question: "In Big Five Personality dimensions, the ability a person displays in handling stress by remaining calm, focused, and self-confident, as opposed to insecure, anxious, and depressed is known as",
    options: [
      "Conscientiousness",
      "Extraversion-Introversion",
      "Agreeableness",
      "Emotional Stability"
    ],
    answer: "Emotional Stability",
  },
  {
    question: "In Big Five Personality dimensions, a person's range of interest in new things. Open people are creative, curious, and artistically sensitive, as opposed to being closed-minded is called as",
    options: [
      "Conscientiousness",
      "Extraversion-Introversion",
      "Agreeableness",
      "Openness to Experience"
    ],
    answer: "Openness to Experience",
  },
  {
    question: "In Big Five Personality dimensions, the hardworking, diligent, organized, dependable, and persistent behavior of a person is termed as",
    options: [
      "Conscientiousness",
      "Extraversion-Introversion",
      "Agreeableness",
      "Emotional Stability"
    ],
    answer: "Conscientiousness",
  },
  {
    question: "In CIA Triad, CIA refers to",
    options: [
      "Confidentiality, Integrity and Authentication",
      "Confidentiality, Integrity and Availability",
      "Confidentiality, Integrity and Accessibility",
      "Confidentiality, Integrity and Authorization"
    ],
    answer: "Confidentiality, Integrity and Availability",
  },
  {
    question: ".....is concerned with the prevention of improper or unauthorized modification of information",
    options: [
      "Confidentiality",
      "Integrity",
      "Authentication",
      "Availability"
    ],
    answer: "Integrity",
  },
  {
    question: "During the ______ design phase of database design, the properties of data is given importance, rather than its storage details",
    options: [
      "conceptual",
      "logical",
      "physical",
      "actual"
    ],
    answer: "conceptual",
  },
  {
    question: "Attributes, relations and map entities in oracle is represented by",
    options: [
      "Conceptual schema",
      "Physical schema",
      "Logical schema",
      "All of above"
    ],
    answer: "Logical schema",
  },
  {
    question: "The attribute composed of multiple components, each with an independent existence is called",
    options: [
      "Composite attribute",
      "Simple attribute",
      "Single valued attribute",
      "Derived attribute"
    ],
    answer: "Composite attribute",
  },
  {
    question: "Overview of the software systems is given by",
    options: [
      "Component Diagram",
      "Deployment Diagram",
      "Package Diagram",
      "Class Diagram"
    ],
    answer: "Deployment Diagram",
  },
  {
    question: "Components of attitude doesn't include",
    options: [
      "Cognitive Component",
      "Behavioral component",
      "Affective component",
      "Personality Component"
    ],
    answer: "Personality Component",
  },
  {
    question: "Which transmission media has the highest transmission speed in the network.",
    options: [
      "Coaxial cable",
      "Twisted pair cable",
      "Optical fibre cable",
      "Electrical cable"
    ],
    answer: "Optical fibre cable",
  },
  {
    question: "______ cable consists of inner copper core and a second conducting outer sheath",
    options: [
      "Coaxial cable",
      "Twisted Pair",
      "Optical fibre cable",
      "shielded Twisted Pair"
    ],
    answer: "Coaxial cable",
  },
  {
    question: "Which one of the following is not a transmission medium.",
    options: [
      "Coaxial cable",
      "Telephone Lines",
      "Modems",
      "Microwave systems"
    ],
    answer: "Modems",
  },
  {
    question: "______ cable consists of two insulated copper wires twisted together.",
    options: [
      "Coaxial",
      "Fiber-optic",
      "Twisted-pair",
      "none of the above"
    ],
    answer: "Twisted-pair",
  },
  {
    question: "______ cables are composed of a glass or plastic inner core surrounded by cladding,all encased in an outside jacket.",
    options: [
      "Coaxial",
      "Fiber-optic",
      "Twisted-pair",
      "none of the above"
    ],
    answer: "Fiber-optic",
  },
  {
    question: "The technology that is used to analyze, monitor network and information flow traffic",
    options: [
      "Cloud access security brokers (CASBS)",
      "Managed detection and response (MDR)",
      "Network Security Firewall",
      "Network traffic analysis (NTA)"
    ],
    answer: "Network traffic analysis (NTA)",
  },
  {
    question: "Exception handling means .......",
    options: [
      "clearing runtime errors",
      "managing runtime errors",
      "clearing logic errors",
      "managing logic errors"
    ],
    answer: "managing runtime errors",
  },
  {
    question: "When class B is inherited from class A, what is the order in which the destructors are called?",
    options: [
      "Class A first Class B next",
      "Class B first Class A next",
      "Class B's only as it is the child class",
      "Class A's only as it is the parent class"
    ],
    answer: "Class B first Class A next",
  },
  {
    question: "Interaction Diagram",
    options: [
      "class + Object",
      "state + Activity",
      "component + Deployment",
      "Sequence + collaboration"
    ],
    answer: "Sequence + collaboration",
  },
  {
    question: "Template uses ______ keyword?",
    options: [
      "class",
      "typename",
      "both class & typename",
      "function"
    ],
    answer: "both class & typename",
  },
  {
    question: "An ______ is an instance or of a copy of a class.",
    options: [
      "Class",
      "Object",
      "Attribute",
      "none"
    ],
    answer: "Object",
  },
  {
    question: "This stress is positive stress which motivates a person",
    options: [
      "Chronic stress",
      "Acute stress",
      "Eustress",
      "Distress"
    ],
    answer: "Eustress",
  },
  {
    question: "What does overriding a method mean?",
    options: [
      "Changing the number and/or type of parameters of a method",
      "Changing the return type of a method.",
      "Writing a method in the child class that has the same header as a method in the parent",
      "Implementing an abstract method."
    ],
    answer: "Writing a method in the child class that has the same header as a method in the parent",
  },
  {
    question: "Consider the following language $L=\\{a^{\\wedge}nb^{\\wedge}mc^{\\wedge}pd^{\\wedge}q| n,m, p,q>=1\\}$ L is",
    options: [
      "CFL but not regular",
      "CSL but not CFL",
      "type 0 language but not type 1",
      "regular"
    ],
    answer: "regular",
  },
  {
    question: "Which of the following is the fundamental assumption about human behaviour?",
    options: [
      "Caused behaviour",
      "Goal oriented behaviour",
      "Motivated behaviour",
      "All of the above"
    ],
    answer: "All of the above",
  },
  {
    question: "Decision table technique is sometimes also referred to as a ______ table.",
    options: [
      "Cause-effect",
      "Redundant",
      "Extreme",
      "Isolated"
    ],
    answer: "Cause-effect",
  },
  {
    question: "The syntax for catching all exceptions in a program is",
    options: [
      "catch-all(...) {}",
      "catchall(...){}",
      "catch(...) {}",
      "catch(.){}"
    ],
    answer: "catch(...) {}",
  },
  {
    question: "Who developed the force-field analysis theory?",
    options: [
      "Carl Rogers",
      "B.F.Skinner",
      "Kurt Lewin",
      "James Johnson"
    ],
    answer: "Kurt Lewin",
  },
  {
    question: "Which of the following keys in a table can uniquely identify a row in a table?",
    options: [
      "Candidate key",
      "Alternate key",
      "Primary key",
      "All of these"
    ],
    answer: "All of these",
  },
  {
    question: "Which of the following concept of oops allows complier to inset arguments in a function call if it is not specified?",
    options: [
      "Call by value",
      "Default arguments",
      "Call by reference",
      "Call by pointer"
    ],
    answer: "Default arguments",
  },
  {
    question: "When the computer processor does not get a data item it requires in the cache, then the problem is known as",
    options: [
      "Cache miss",
      "Cache hit",
      "File caches",
      "Name cache"
    ],
    answer: "Cache miss",
  },
  {
    question: "is the technique by which a partially loaded program can be executed.",
    options: [
      "Cache memory",
      "Virtual memory",
      "Associative memory",
      "Shared memory"
    ],
    answer: "Virtual memory",
  },
  {
    question: "$F=\\{AB-->C,C-->A\\}$, A closure is",
    options: [
      "CA",
      "C",
      "A",
      "ABC"
    ],
    answer: "A",
  },
  {
    question: "Which type of network needs 'terminators' to function correctly?",
    options: [
      "Bus",
      "Star",
      "Ring",
      "Tree"
    ],
    answer: "Bus",
  },
  {
    question: "Which data structure is needed to convert infix notation to postfix notation?",
    options: [
      "Branch",
      "Queue",
      "Tree",
      "Stack"
    ],
    answer: "Stack",
  },
  {
    question: "The assumptions about the future in which the planning is implemented are termed as",
    options: [
      "Boundaries",
      "Premises",
      "Limits",
      "Hypothesis"
    ],
    answer: "Premises",
  },
  {
    question: "A collection of methods with no implementation is called an",
    options: [
      "block code",
      "comment",
      "interface",
      "blueprint"
    ],
    answer: "interface",
  },
  {
    question: "What type of encryption encrypts the plain text byte by byte or bit by bit?",
    options: [
      "Block",
      "Hash",
      "Stream",
      "Elliptic"
    ],
    answer: "Stream",
  },
  {
    question: "What is Cyclomatic complexity?",
    options: [
      "Black box testing",
      "White box testing",
      "Yellow box testing",
      "Green box testing"
    ],
    answer: "White box testing",
  },
  {
    question: "Which is the most efferent phone directory search?",
    options: [
      "Binary search tree",
      "Balanced BST",
      "Trie",
      "Linked List"
    ],
    answer: "Trie",
  },
  {
    question: "memory management scheme will produce least fragment",
    options: [
      "Best Fit",
      "Worst Fit",
      "First Fit",
      "None of the given choices"
    ],
    answer: "Best Fit",
  },
  {
    question: "memory management scheme will produce largest fragment",
    options: [
      "Best Fit",
      "Worst Fit",
      "First Fit",
      "None of the given choices"
    ],
    answer: "Worst Fit",
  },
  {
    question: "Given five memory partitions of 100Kb, 500Kb, 200Kb, 300Kb, 600Kb (in order), which algorithm would be able to successfully place the following processes of 212 Kb, 417 Kb, 112 Kb, and 426 Kb?",
    options: [
      "Best Fit",
      "Worst Fit",
      "First Fit",
      "All the given choices."
    ],
    answer: "All the given choices.",
  },
  {
    question: "Guess the output. \n`#include<stdio.h>\n#include<string.h>\nmain(){\n char Be[16]=\"Positive \";\n char Positive [16]=\"Be \";\n strcat(Be, Positive);\n printf(\"%s\", Be);\n}`",
    options: [
      "Be",
      "Positive",
      "Positive Be",
      "Be Positive"
    ],
    answer: "Positive Be",
  },
  {
    question: "The page table contains",
    options: [
      "base address of each page in physical memory",
      "page offset",
      "page size",
      "displacement"
    ],
    answer: "base address of each page in physical memory",
  },
  {
    question: "In India, whose law governs data privacy and information technology?",
    options: [
      "Banking Regulation Act 1949",
      "IT Act 2000",
      "Indian Penal Code",
      "IT (amendment) Act 2008"
    ],
    answer: "IT Act 2000",
  },
  {
    question: "Design techniques which one is used to finding all the pairs of shortest distances in a graph?",
    options: [
      "Backtracking",
      "Greedy",
      "Dynamic programming",
      "Divide and Conquer"
    ],
    answer: "Dynamic programming",
  },
  {
    question: "A better measurement of performance of memory-hierarchy is the",
    options: [
      "Average memory access time",
      "Average memory hit rate",
      "Average memory miss rate",
      "Write stall"
    ],
    answer: "Average memory access time",
  },
  {
    question: "is the minimum number of steps that can execute for the given parameters",
    options: [
      "Average case",
      "Worst case",
      "Time complexity",
      "Best case"
    ],
    answer: "Best case",
  },
  {
    question: "is the maximum number of steps that can execute for the given parameters",
    options: [
      "Average case",
      "Worst case",
      "Time complexity",
      "Best case"
    ],
    answer: "Worst case",
  },
  {
    question: "Communication between a computer and a keyboard involves ______ transmission.",
    options: [
      "Automatic",
      "Halfduplex-",
      "Fullduplex-",
      "Simplex"
    ],
    answer: "Simplex",
  },
  {
    question: "When there are infinite distinguishable strings then there cannot be a",
    options: [
      "automata",
      "finite automata",
      "regular expression",
      "both finite automata and regular expression"
    ],
    answer: "both finite automata and regular expression",
  },
  {
    question: "Keerthana solicits input from her subordinates before making decisions that will affect them. She often praises them for good work and gently offers suggestions to improve their performance. Keerthana uses the ______ style of leadership.",
    options: [
      "autocratic",
      "participative",
      "democratic",
      "supportive"
    ],
    answer: "participative",
  },
  {
    question: "Nusrat sees her role as someone who provides direction and resources for her team then gets out of their way and lets them do their work however they think best. Nusrat uses the ______ style of leadership.",
    options: [
      "autocratic",
      "participative",
      "democratic",
      "laissez-faire"
    ],
    answer: "laissez-faire",
  },
  {
    question: "In working with his employees, Rahman involves them in decision making and encourages them to participate in deciding their work methods and goals. Rahman's leadership style can best be described as",
    options: [
      "autocratic",
      "laissez-faire",
      "democratic",
      "participative"
    ],
    answer: "democratic",
  },
  {
    question: "Thomas Tharakan expects his employees to \"check their brains at the door.\" He does all the thinking, makes all the decisions, and issues commands to his subordinates. Thomas uses the ______ style of leadership.",
    options: [
      "autocratic",
      "authoritarian",
      "democratic",
      "laissez-faire"
    ],
    answer: "autocratic",
  },
  {
    question: "What does biometrics have to do with access control?",
    options: [
      "Authorization",
      "Authentication",
      "Confirmation",
      "Certification"
    ],
    answer: "Authentication",
  },
  {
    question: "Which is not one of Fayol's principles?",
    options: [
      "Authority and responsibility",
      "Globalization",
      "Unity of direction",
      "Unity of command"
    ],
    answer: "Globalization",
  },
  {
    question: "According to Henri Fayol, if this principle of general management is violated, \"authority is undermined, discipline is in jeopardy, order disturbed, and stability threatened.\" Identify the principle.",
    options: [
      "Authority and responsibility",
      "Discipline",
      "Unity of command",
      "Equity"
    ],
    answer: "Unity of command",
  },
  {
    question: "Ellipse in ER diagram represent",
    options: [
      "Attributes",
      "Entities",
      "Weak Set",
      "Strong Set"
    ],
    answer: "Attributes",
  },
  {
    question: "Not a Component of DFD",
    options: [
      "Attributes",
      "Entities",
      "Process",
      "Data Flow"
    ],
    answer: "Attributes",
  },
  {
    question: "An evaluative statements that is either favorable or unfavorable about objects, people, or events is called",
    options: [
      "Attitude",
      "Stereotype",
      "Attribution",
      "Personality"
    ],
    answer: "Attitude",
  },
  {
    question: "A stable set of characteristics and tendencies that determine commonalities and differences in people's behavior is called",
    options: [
      "Attitude",
      "Stereotype",
      "Attribution",
      "Personality"
    ],
    answer: "Personality",
  },
  {
    question: "MBTI is used to measure",
    options: [
      "Attitude",
      "Behaviour",
      "Personality",
      "Response"
    ],
    answer: "Personality",
  },
  {
    question: "In the below function \"factorial\", all automatic variables are stored in\n`#include <stdio.h>\nint factorial(int i) {\n if(i<=1) {\n  return 1;\n }\n return i * factorial(i - 1);\n}\nmain() {\n printf(\"%d\", factorial(5));\n}`",
    options: [
      "Array",
      "Register",
      "Stack",
      "Queue"
    ],
    answer: "Stack",
  },
  {
    question: "What will be the output?\n`#include<stdio.h>\n#include<string.h>\nmain(){\n char arr1[5]={'a','p','p','l','e'};\n char arr2[5];\n arr2=arr1;\n printf(\"%s\", arr2);\n}`",
    options: [
      "apple",
      "Error",
      "a",
      "0"
    ],
    answer: "Error",
  },
  {
    question: "In segmentation technique, each address is specified by",
    options: [
      "an offset and value",
      "a value and segment number",
      "a key and value",
      "a segment number and offset"
    ],
    answer: "a segment number and offset",
  },
  {
    question: "utilization is the use of available bandwidth to achieve specific goals.",
    options: [
      "Amplitude",
      "Frequency",
      "Bandwidth",
      "None of the above"
    ],
    answer: "Bandwidth",
  },
  {
    question: "Exhaustive testing is",
    options: [
      "always possible",
      "practically possible",
      "impractical but possible",
      "impractical and impossible"
    ],
    answer: "impractical but possible",
  },
  {
    question: "What will be the output?\n`#include <stdio.h>\nchar* cut(char *parameter) {\n parameter += 5;\n return parameter;\n}\nmain() {\n printf(\"%s\", cut(\"AllisWell!\"));\n}`",
    options: [
      "Allis",
      "Well!",
      "Allis Well!",
      "Error"
    ],
    answer: "Well!",
  },
  {
    question: "The basic limitation of FSM is that",
    options: [
      "all of the comments are true",
      "it cannot remember arbitrary large amounts of information",
      "it sometimes fails to recognize grammars that are regular",
      "it sometimes recognized grammars that are not regular"
    ],
    answer: "it cannot remember arbitrary large amounts of information",
  },
  {
    question: "Which among the following is false, for a member function of a class",
    options: [
      "All member functions must be defined",
      "Member functions can be defined inside or outside the class body",
      "Member functions need not be declared inside the class definition",
      "Member functions can be made friend to another class using the friend keyword"
    ],
    answer: "Member functions need not be declared inside the class definition",
  },
  {
    question: "The Scalar principle of organisation implies",
    options: [
      "All authority must be vested to one person",
      "Manager should directly supervise only a limited number of subordinates",
      "Line of authority must be clearly defined",
      "A subordinate should have only one supervisor"
    ],
    answer: "Line of authority must be clearly defined",
  },
  {
    question: "solution requires reasoning built on knowledge and experience",
    options: [
      "Algorithmic Solution",
      "Heuristic Solution",
      "Random Solution",
      "None of these"
    ],
    answer: "Heuristic Solution",
  },
  {
    question: "Which process model deals with review of project and a decision is made whether to continue with a further loop or not in the planning phase?",
    options: [
      "Agile Process Model",
      "Waterfall Process Model",
      "Incremental Process Model",
      "Spiral Model"
    ],
    answer: "Spiral Model",
  },
  {
    question: "The idea of developing an initial implementation, getting the user feedback, and evolving it through various versions until an acceptable system is made is",
    options: [
      "Agile Process Model",
      "Waterfall Process Model",
      "Incremental Process Model",
      "RAD Process Model"
    ],
    answer: "Incremental Process Model",
  },
  {
    question: "The Lattice-Based Access Control paradigm was created primarily to address",
    options: [
      "Affinity",
      "Availability",
      "Confidentiality",
      "Integrity"
    ],
    answer: "Confidentiality",
  },
  {
    question: "Which one of the following would be classified as sensitive personal data?",
    options: [
      "Address",
      "Religion",
      "CCTV Video",
      "Name"
    ],
    answer: "Religion",
  },
  {
    question: "The operation for adding an entry to a stack is traditionally called:",
    options: [
      "add",
      "append",
      "insert",
      "push"
    ],
    answer: "push",
  },
  {
    question: "Event based modelling in UML",
    options: [
      "Activity Diagram",
      "State Diagram",
      "Class Diagram",
      "Object Diagram"
    ],
    answer: "State Diagram",
  },
  {
    question: "In clark Wilson model a proper ______ log files to be maintained",
    options: [
      "Active",
      "Data",
      "Audit",
      "Internal"
    ],
    answer: "Audit",
  },
  {
    question: "Once DMA transfer is completed, it is notified to the CPU through ______ signal",
    options: [
      "Acknowledgement signal",
      "Interrupt Signal",
      "Program status word",
      "None of the mentioned options."
    ],
    answer: "Interrupt Signal",
  },
  {
    question: "In a line organisation, the business activities are divided into following three types.",
    options: [
      "Accounts, Production, Sales",
      "Production, Quality, Sales",
      "Production, Quality, Maintenance",
      "Production, Maintenance, Sales"
    ],
    answer: "Accounts, Production, Sales",
  },
  {
    question: "What will be the output?\n`#include<stdio.h>\nmain(){\n char arr[]=\"ab.cd.ef\";\n printf(\"%s\", strrchr(arr,'.'));\n}`",
    options: [
      "ab",
      ".cd",
      ".cd.ef",
      ".ef"
    ],
    answer: ".ef",
  },
  {
    question: "What will be printed?\n`#include<stdio.h>\nmain(){\n char arr[]=\"ab.cd.ef\";\n printf(\"%s\", strchr(arr,'.'));\n}`",
    options: [
      "ab",
      ".cd",
      ".cd.ef",
      ".ef"
    ],
    answer: ".cd.ef",
  },
  {
    question: "Select the output of the following\n`#include<stdio.h>\nmain(){\n char arr1 [5]=\"apple\";\n char arr2[5]=\"apple\";\n if (arr1==arr2)\n  printf(\"Same\");\n else\n  printf(\"Not Same\");\n}`",
    options: [
      "Same",
      "Not Same",
      "Error",
      "None of these"
    ],
    answer: "Not Same",
  },
  {
    question: "What will be printed\n`#include<stdio.h>\nmain(){\n char arr[5]=\"apple\";\n printf(\"%c\", arr[0]);\n}`",
    options: [
      "apple",
      "a",
      "97",
      "Error"
    ],
    answer: "a",
  },
  {
    question: "Which of the given option is correct?\n`#include<stdio.h>\nmain(){\n int a[4]={1,2,3,4};\n int *b[4];\n int *(c[4]);\n printf(\"%d %d %d\",a,b,c);\n}`",
    options: [
      "a is an integer array, b is an array of pointers, c is an array of pointers",
      "a is an integer array, b is an array of pointers, c is a pointer to an array",
      "a is an array of pointers, b is a pointer to an array, c is an array of pointers",
      "a is an array of pointers, b is a pointer to an array, c is a pointer to an array"
    ],
    answer: "a is an integer array, b is an array of pointers, c is an array of pointers",
  },
  {
    question: "What will be the output\n`#include<stdio.h>\nmain(){\n int arr[4]={0,1,2,3};\n int one, two, three;\n one=++arr[1];\n two=arr[one]+1;\n three=arr[one+1];\n printf(\"%d %d %d\", one, two, three);\n}`",
    options: [
      "123",
      "233",
      "223",
      "012"
    ],
    answer: "233",
  },
  {
    question: "Consider the followings right-linear grammar G= (N,T,P,S) N={S} P{S-->aS|aA, A-->bA/b} T={a,b}. Which of the following regular expression denotes L(G)?",
    options: [
      "$a^{*}b^{*}$",
      "$aa^{*}bb^{*}$",
      "$a(ab)^{*}b$",
      "$(a+b)^{*}$"
    ],
    answer: "$aa^{*}bb^{*}$",
  },
  {
    question: "Which of the following statements is false?",
    options: [
      "If a language is regular it can always be accepted by a finite state automaton",
      "The union of two regular languages is regular",
      "The intersection of regular languages is regular",
      "The power of NFA is more than the power of a DFA"
    ],
    answer: "The power of NFA is more than the power of a DFA",
  },
  {
    question: "In work specialisation, efficiency is generated through",
    options: [
      "a variety of tasks.",
      "repetitive tasks.",
      "training.",
      "guidance of managers."
    ],
    answer: "repetitive tasks.",
  },
  {
    question: "Compaction is",
    options: [
      "a technique for overcoming internal fragmentation",
      "a paging technique",
      "a technique for overcoming external fragmentation",
      "a technique for overcoming fatal error"
    ],
    answer: "a technique for overcoming external fragmentation",
  },
  {
    question: "ARP (Address Resolution Protocol) is....",
    options: [
      "a TCP/IP protocol used to dynamically bind a high level IP Address to a low-level physical hardware address",
      "a TCP/IP high level protocol for transferring files from one machine to another",
      "a protocol used to monitor computers",
      "a protocol that handles error and control messages"
    ],
    answer: "a TCP/IP protocol used to dynamically bind a high level IP Address to a low-level physical hardware address",
  },
  {
    question: "Recursive languages are",
    options: [
      "A proper super set of CFL",
      "Always recognized by PDA",
      "type 0 languages",
      "Are also called decidable languages"
    ],
    answer: "A proper super set of CFL",
  },
  {
    question: "Which of the following statements about the Privacy Data Breach Incident is correct?",
    options: [
      "A Privacy incident is a theft of an asset",
      "A privacy event occurs when personal information is lost in any way. Both suspected and confirmed occurrences involving Personal Identifiable Information (PII) that provide a reasonable risk of harm are covered by this term.",
      "A Privacy Incident is one that may not cause serious injury or harm to the individual and/or involves a few numbers of affected individuals",
      "A Privacy incident is an attack on an asset"
    ],
    answer: "A privacy event occurs when personal information is lost in any way. Both suspected and confirmed occurrences involving Personal Identifiable Information (PII) that provide a reasonable risk of harm are covered by this term.",
  },
  {
    question: "Assertion (A): The virtual function supports dynamic-binding. Reason (R): The inheritance concept helps in achieving it.",
    options: [
      "A is correct; R is the correct explanation for A",
      "A and R are correct; But R is not the actual reason for A",
      "A is incorrect; R is correct",
      "Both A and R are incorrect"
    ],
    answer: "A is correct; R is the correct explanation for A",
  },
  {
    question: "Which of the following is correct about class and structure?",
    options: [
      "A class can have member functions while a structure cannot.",
      "class data members are public by default while that of the structure are private.",
      "Pointer to structure or classes cannot be declared.",
      "class data members are private by default while that of a structure are public by default."
    ],
    answer: "class data members are private by default while that of a structure are public by default.",
  },
  {
    question: "Consider the following moves: δ(A,1)=B, δ(A,0)=A, δ(B,(0,1))=C, δ(C,0)=A (Initial state = A). Applying the string = 011001 the automata will be in which of the states?",
    options: [
      "A",
      "C",
      "B",
      "Invalid String"
    ],
    answer: "C",
  },
  {
    question: "Which of the following pair is correctly matched?",
    options: [
      "A. F.W. Taylor - Human Relations Approach",
      "B. Henry Fayol - Universality of Management",
      "C. Elton Mayo - Psychological Approach",
      "D. M. Parker Follet - Scientific Management"
    ],
    answer: "B. Henry Fayol - Universality of Management",
  },
  {
    question: "The five items: A, B, C, D and E are pushed in the stack, one after the other starting from A. The stack is popped into four items and each element is inserted in a queue. Then two elements are deleted from the queue and pushed back on the stack. Now one item is popped from the stack. The popped item is.",
    options: [
      "A",
      "B",
      "C",
      "D"
    ],
    answer: "D",
  },
  {
    question: "Which of the following is the address operator?",
    options: [
      "@",
      "#",
      "&",
      "%"
    ],
    answer: "&",
  },
  {
    question: "Consider the languages. L₁={aⁿbⁿcᵐ|n,m≥1} and L₂={aⁿbᵐcᵐ|n, m≥1}. Which one of the following statement is TRUE?",
    options: [
      "L₁ U L₂ is a CSL",
      "L₁ U L₂ is a CFL",
      "L₁ and L₂ are CSL",
      "L₁ ∩ L₂ is a CSL"
    ],
    answer: "L₁ U L₂ is a CFL",
  },
  {
    question: "Recursive enumerable languages are not closed under",
    options: [
      "Union",
      "Homomorphism",
      "Complementation",
      "Concatenation"
    ],
    answer: "Complementation",
  },
  {
    question: "Consider a language L for which there exists a Turing machine (TM), that accepts every word in L and either rejects or loops for every word that is not in L. The language is",
    options: [
      "NP hard",
      "NP complete",
      "Recursive",
      "Recursively enumerable"
    ],
    answer: "Recursively enumerable",
  },
  {
    question: "Which of the following problem is undecidable?",
    options: [
      "Membership problem for CFL",
      "Membership problem for regular sets",
      "Membership problem for CSL",
      "Membership problem for type 0 languages"
    ],
    answer: "Membership problem for type 0 languages",
  },
  {
    question: "Consider the following statements:\nI) Recursive languages are closed under complementation\nII) Recursive enumerable languages are closed under union\nIII) Recursive enumerable languages are closed under complementation\nWhich of the above statements are TRUE?",
    options: [
      "I only",
      "I and II",
      "I and III",
      "II and III"
    ],
    answer: "I and II",
  },
  {
    question: "It is undecidable, whether",
    options: [
      "an arbitrary TM has 15 states",
      "an arbitrary TM halts after 10 steps",
      "an arbitrary TM ever prints a specific letter",
      "an arbitrary TM accepts a string w in 5 steps"
    ],
    answer: "an arbitrary TM ever prints a specific letter",
  },
  {
    question: "Which one of the following is the strongest correct statement about a finite language L over a finite alphabet Σ?",
    options: [
      "L is undecidable",
      "L is recursive",
      "L is a CSL",
      "L is a regular set"
    ],
    answer: "L is a regular set",
  },
  {
    question: "Let L₁ be a regular language and L₂ a deterministic CFL, L₃ is recursively enumerable but not recursive. Which one of the following statement is FALSE?",
    options: [
      "L₁ ∩ L₂ is a DCFL",
      "L₃ ∩ L₁ is recursive",
      "L₁ U L₂ is context-free",
      "L₁ ∩ L₂ ∩ L₃ is recursively enumerable"
    ],
    answer: "L₃ ∩ L₁ is recursive",
  },
  {
    question: "The language {0ⁿ1ⁿ | n ≥ 0} over the alphabet {0, 1, 2} is",
    options: [
      "Not recursive",
      "is recursive and is a deterministic CFL",
      "is a regular language",
      "is not a deterministic CFL but a CFL."
    ],
    answer: "is recursive and is a deterministic CFL",
  },
  {
    question: "In the ______ protocol we avoid unnecessary transmission by sending only frames that are corrupted.",
    options: [
      "Stop-and-Wait ARQ",
      "Go-Back-N ARQ",
      "Selective-Repeat ARQ",
      "None of the above"
    ],
    answer: "Selective-Repeat ARQ",
  },
  {
    question: "In the ______ Protocol, if no acknowledgment for a frame has arrived, we resend all outstanding frames.",
    options: [
      "Stop-and-Wait",
      "Simplest",
      "Go-Back-N ARQ",
      "Selective-Repeat ARQ"
    ],
    answer: "Go-Back-N ARQ",
  },
  {
    question: "Which one of the following protocols is used for the noisy channel?",
    options: [
      "Simplest protocol",
      "Half duplex",
      "Selective repeat ARQ",
      "Hybrid"
    ],
    answer: "Selective repeat ARQ",
  },
  {
    question: "To guarantee the detection of up to S errors in all cases, the minimum hamming distance in a block code must be",
    options: [
      "S",
      "S+1",
      "S-1",
      "2S"
    ],
    answer: "S+1",
  },
  {
    question: "To detect or correct errors, we send extra bits with data is known as",
    options: [
      "Redundancy",
      "Correction",
      "Detection",
      "Authentication"
    ],
    answer: "Redundancy",
  },
  {
    question: "______ attacks involve modification of the contents of the message.",
    options: [
      "Passive",
      "Active",
      "Both Passive and Active",
      "None of the given choices"
    ],
    answer: "Active",
  },
  {
    question: "In stop and wait flow control, for n data packets sent, how many acknowledgments are needed?",
    options: [
      "n-1",
      "n",
      "2n",
      "n+1"
    ],
    answer: "n",
  },
  {
    question: "The stop and wait protocol uses the link of",
    options: [
      "Modulation",
      "Full duplex",
      "Half duplex",
      "De modulation"
    ],
    answer: "Half duplex",
  },
  {
    question: "is the relationship between the message and signature in case of Digital Signature.",
    options: [
      "Many to One",
      "One to Many",
      "Many to Many",
      "One to One"
    ],
    answer: "Many to One",
  },
  {
    question: "The term that refers to a set of procedures used to restrict the amount of data that the sender can send before waiting for acknowledgment is",
    options: [
      "Error control",
      "Flow control",
      "Delay",
      "Byte stuffing"
    ],
    answer: "Flow control",
  },
  {
    question: "Parity bits are used for which of the following purposes?",
    options: [
      "Encryption of data",
      "To transmit faster",
      "To detect errors",
      "To identify the user"
    ],
    answer: "To detect errors",
  },
  {
    question: "CRC stands for",
    options: [
      "Cyclic Redundancy Check",
      "Code Repeat Check",
      "Code Redundancy Check",
      "Cyclic Repeat Check"
    ],
    answer: "Cyclic Redundancy Check",
  },
  {
    question: "is a technique of decoding messages from a non-readable form back to readable format without knowing how they were initially converted from readable format to non-readable format.",
    options: [
      "Cryptography",
      "Encryption",
      "Decryption",
      "Cryptanalysis"
    ],
    answer: "Cryptanalysis",
  },
  {
    question: "Which error detection method involves polynomials?",
    options: [
      "CRC",
      "Simple parity check",
      "Two-dimensional parity check",
      "Checksum"
    ],
    answer: "CRC",
  },
  {
    question: "Which of the following ensures that data received was sent by the specified sender?",
    options: [
      "Confidentiality",
      "Authenticity",
      "Non-repudiation",
      "None of the choices"
    ],
    answer: "Authenticity",
  },
  {
    question: "The plain text \"come home tomorrow\" will be transformed into which of the following if it uses Rail-fence technique.",
    options: [
      "cmhmtmrooeoeoorw",
      "cmtmhmrooreoeowo",
      "cmhmtmeoeoroorwo",
      "None of the given choices"
    ],
    answer: "cmhmtmrooeoeoorw",
  },
  {
    question: "Error control in the data link layer is based on",
    options: [
      "Automatic repeat request",
      "Manually repeat request",
      "Situation based",
      "Terminated request"
    ],
    answer: "Automatic repeat request",
  },
  {
    question: "If the sender of a statement cannot successfully dispute its authorship, this ability is called",
    options: [
      "Authentication",
      "Non-repudiation",
      "Confidentiality",
      "Integrity"
    ],
    answer: "Non-repudiation",
  },
  {
    question: "Bob receives a message digitally signed by Alice. Bob wants to verify the signature, he requires?",
    options: [
      "Alice's Public key",
      "Bob's Public Key",
      "Alice's Private Key",
      "Bob's Private Key"
    ],
    answer: "Alice's Public key",
  },
  {
    question: "In Go-Back-N ARQ, if frames 5, 6, and 7 are received successfully, the receiver may send an ACK ______ to the sender.",
    options: [
      "5",
      "6",
      "7",
      "8"
    ],
    answer: "8",
  },
  {
    question: "The hamming distance between the words 101101101 and 110110010 is",
    options: [
      "4",
      "5",
      "6",
      "7"
    ],
    answer: "5",
  },
  {
    question: "In Selective Repeat ARQ, if 4 is the number of bits for the sequence number, then the maximum size of the receive window must be",
    options: [
      "15",
      "16",
      "31",
      "8"
    ],
    answer: "8",
  },
  {
    question: "In Go-Back-N ARQ, if 10 is the number of bits for the sequence number, then the maximum size of the receive window must be",
    options: [
      "15",
      "16",
      "31",
      "1"
    ],
    answer: "1",
  },
  {
    question: "In Go-Back-N ARQ, if 4 is the number of bits for the sequence number, then the maximum size of the send window must be",
    options: [
      "15",
      "16",
      "31",
      "1"
    ],
    answer: "15",
  },
  {
    question: "In Selective Repeat ARQ, if 4 is the number of bits for the sequence number, then the maximum size of the send window must be",
    options: [
      "15",
      "16",
      "31",
      "8"
    ],
    answer: "8",
  },
  {
    question: "In IDEA, the key size is",
    options: [
      "128 bytes",
      "128 bits",
      "256 bytes",
      "256 bits"
    ],
    answer: "128 bits",
  },
  {
    question: "To construct cipher text, ______ technique reorders plaintext characters.",
    options: [
      "Substitution",
      "Transposition",
      "neither (a) nor (b)",
      "both (a) and (b)"
    ],
    answer: "Transposition",
  },
  {
    question: "Caesar Cipher is also referred to as",
    options: [
      "Shift Cipher",
      "Row transposition cipher",
      "One - pad",
      "None of the choices"
    ],
    answer: "Shift Cipher",
  },
  {
    question: "A ______ is used to verify the integrity of a message.",
    options: [
      "Message digest",
      "Decryption algorithm",
      "Digital envelope",
      "None of the above"
    ],
    answer: "Message digest",
  },
  {
    question: "Which variant of DES is also called Encrypt-Decrypt-Encrypt mode?",
    options: [
      "Double DES",
      "Triple DES with two keys",
      "Triple DES with three keys",
      "None of the given choices"
    ],
    answer: "Triple DES with three keys",
  },
  {
    question: "The ______ method provides a one-time session key for two parties.",
    options: [
      "Diffie-Hellman",
      "RSA",
      "DES",
      "AES"
    ],
    answer: "Diffie-Hellman",
  },
  {
    question: "The science and art of converting messages to make them secure and resistant to attacks is known as",
    options: [
      "Cryptography",
      "Cryptanalysis",
      "Cryptology",
      "None of the choices"
    ],
    answer: "Cryptography",
  },
  {
    question: "If the information is protected from unauthorized change which of the following holds good.",
    options: [
      "Availability",
      "Authenticity",
      "Non-repudiation",
      "Integrity"
    ],
    answer: "Integrity",
  },
  {
    question: "Which of the following would LEAST likely be a source of ethical guidance?",
    options: [
      "holy books",
      "laws",
      "tests",
      "friends"
    ],
    answer: "friends",
  },
  {
    question: "Which of the following principles of management was not given by Fayol?",
    options: [
      "Unity of direction",
      "Subordination of individual interest to common interest",
      "Stability of tenure",
      "Standardisation"
    ],
    answer: "Standardisation",
  },
  {
    question: "\"Workers should receive orders from only one manager\", this principle is termed as",
    options: [
      "Unity of command",
      "Unity of direction",
      "Unity of group",
      "Unity of management"
    ],
    answer: "Unity of command",
  },
  {
    question: "Find the correct syntax of throw statement:",
    options: [
      "throw (exception);",
      "throw exception;",
      "throw;",
      "All of the above"
    ],
    answer: "All of the above",
  },
  {
    question: "The Hawthorne Studies doesn't include",
    options: [
      "The illumination studies",
      "The Relay Assembly Test Room Studies",
      "The mass interviewing Program",
      "The time and motion study"
    ],
    answer: "The time and motion study",
  },
  {
    question: "Esprit de corps refers to",
    options: [
      "Team work and cooperation",
      "A Single Boss",
      "Flexibility",
      "None of these"
    ],
    answer: "Team work and cooperation",
  },
  {
    question: "Narrow span of control results into",
    options: [
      "Tall structure",
      "Flat structure",
      "Mechanistic structure",
      "All the above"
    ],
    answer: "Tall structure",
  },
  {
    question: "\"Managers have long realised that there is no one best way to do things\". This statement is suitable for which management approach?",
    options: [
      "Systems Theory",
      "Contingency Theory",
      "Organizational Humanism",
      "Management Science"
    ],
    answer: "Contingency Theory",
  },
  {
    question: "Exceptions are........",
    options: [
      "Syntax error",
      "Logic error",
      "Compile time error",
      "Run time error"
    ],
    answer: "Run time error",
  },
  {
    question: "\"Keyboard Interrupt is an example for",
    options: [
      "Synchronous exception",
      "Asynchronous exception",
      "Both (a) and (b)",
      "Neither (a) nor (b)"
    ],
    answer: "Asynchronous exception",
  },
  {
    question: "A period of \"testing-out\" the leaders in group development stages",
    options: [
      "Storming",
      "Norming",
      "Performing",
      "Adjourning"
    ],
    answer: "Storming",
  },
  {
    question: "\"Functional foremanship\" is related to",
    options: [
      "Scientific Management",
      "Administrative Management",
      "Human Relations School",
      "Bureaucratic Organization"
    ],
    answer: "Scientific Management",
  },
  {
    question: "\"Fayol's principles\" are related to",
    options: [
      "Scientific Management",
      "Administrative Management",
      "Human Relations School",
      "Bureaucratic Organization"
    ],
    answer: "Administrative Management",
  },
  {
    question: "The element of role identity which describes how an individual is expected to behave according to his own perception in the group is called",
    options: [
      "Role perception",
      "Role expectation",
      "Role identification",
      "Role description"
    ],
    answer: "Role perception",
  },
  {
    question: "The element of role identity which describes how others believe one should behave in a given situation.",
    options: [
      "Role perception",
      "Role expectation",
      "Role identification",
      "Role description"
    ],
    answer: "Role expectation",
  },
  {
    question: "An implied understanding of mutual contributions between a person and his or her organization, which is not a written document, is called as",
    options: [
      "Psychological contract",
      "Legal contract",
      "Illegal contact",
      "Unwritten contract"
    ],
    answer: "Psychological contract",
  },
  {
    question: "The process by which an individual gives meaning to the environment is called",
    options: [
      "Perception",
      "Stereotype",
      "Attribution",
      "Personality"
    ],
    answer: "Perception",
  },
  {
    question: "Unity of command means:",
    options: [
      "Parity of authority and responsibility",
      "The flow of command from superior to a subordinate",
      "Parity in controlling",
      "None of the above"
    ],
    answer: "The flow of command from superior to a subordinate",
  },
  {
    question: "Which of the following is NOT a key concept associated with scientific management?",
    options: [
      "One best way",
      "Formalization",
      "Time-and-motion studies.",
      "Systematic selection"
    ],
    answer: "Formalization",
  },
  {
    question: "An example for external premises in planning is",
    options: [
      "Money",
      "Materials",
      "Machines",
      "Competitors strategy"
    ],
    answer: "Competitors strategy",
  },
  {
    question: "Internal premises in planning doesn't include",
    options: [
      "Money",
      "Materials",
      "Machines",
      "Competitors strategy"
    ],
    answer: "Competitors strategy",
  },
  {
    question: "MBO is",
    options: [
      "Management By Options",
      "Management By Operations",
      "Management By Objectives",
      "Management By Orders"
    ],
    answer: "Management By Objectives",
  },
  {
    question: "In Mintzberg's management roles, the role that evaluate the performance of managers in different functions is called",
    options: [
      "Liaison",
      "Figurehead",
      "Monitor",
      "Disseminator"
    ],
    answer: "Monitor",
  },
  {
    question: "Which of the following is correct about 'Grapevine'",
    options: [
      "It tends to exist when members of formal group know one- another well",
      "It is the result of social forces at work place.",
      "It is more common in times of high organisational excitement.",
      "All the above"
    ],
    answer: "All the above",
  },
  {
    question: "Which of these statements concerning Weber's concept of Bureaucracy is not correct?",
    options: [
      "It is based on rules and procedures rather than personal preference and judgment.",
      "It is still a relevant concept in today's organization.",
      "It has acquired a negative reputation for inefficiency and rigidity.",
      "It rejects rational approaches to managing organizations"
    ],
    answer: "It rejects rational approaches to managing organizations",
  },
  {
    question: "Which one of the following is not a 'hygiene factor' of Herzberg's Two Factor theory?",
    options: [
      "Interpersonal relations",
      "Working conditions",
      "Responsibility",
      "Job security"
    ],
    answer: "Responsibility",
  },
  {
    question: "Centralisation",
    options: [
      "Increasing the importance of subordinate role",
      "Decreasing the importance of subordinate role",
      "Both are correct",
      "None"
    ],
    answer: "Decreasing the importance of subordinate role",
  },
  {
    question: "The control takes place after the action is called as",
    options: [
      "Feed Forward Control",
      "Concurrent Control",
      "Feedback Control",
      "Control measure"
    ],
    answer: "Feedback Control",
  },
  {
    question: "Control that attempts to identify and prevent deviations before they occur is called as",
    options: [
      "Feed Forward Control",
      "Concurrent Control",
      "Feedback Control",
      "Control measure"
    ],
    answer: "Feed Forward Control",
  },
  {
    question: "Control that monitors ongoing employee activities during their progress, to ensure they are consistent with quality standards, is called as",
    options: [
      "Feed Forward Control",
      "Concurrent Control",
      "Feedback Control",
      "Control measure"
    ],
    answer: "Concurrent Control",
  },
  {
    question: "Who is the father of scientific management?",
    options: [
      "FW Taylor",
      "Henry Fayol",
      "Peter Drucker",
      "None of these"
    ],
    answer: "FW Taylor",
  },
  {
    question: "The stress which is negative in nature and causes mental and physical problems is known as",
    options: [
      "Eustress",
      "Distress",
      "Negative stress",
      "Permanent stress"
    ],
    answer: "Distress",
  },
  {
    question: "A pure virtual function implicitly means",
    options: [
      "do-everything function",
      "do-nothing function",
      "do-something function",
      "None of the above."
    ],
    answer: "do-nothing function",
  },
  {
    question: "The keyword virtual can be used for.........",
    options: [
      "data members (or) variables",
      "Member functions",
      "classes",
      "Both (b) and (c)"
    ],
    answer: "Member functions",
  },
  {
    question: "In Big Five Personality dimensions, the degree to which a person is sociable, gregarious, and assertive versus reserved, quiet and timid is called as",
    options: [
      "Conscientiousness",
      "Extraversion-Introversion",
      "Agreeableness",
      "Emotional Stability"
    ],
    answer: "Extraversion-Introversion",
  },
  {
    question: "In Big Five Personality dimensions, the degree of working well with others by sharing trust, warmth, and cooperativeness is called as",
    options: [
      "Conscientiousness",
      "Extraversion-Introversion",
      "Agreeableness",
      "Emotional Stability"
    ],
    answer: "Agreeableness",
  },
  {
    question: "Which of the following is the correct representation of pure virtual function?",
    options: [
      "class base { public: virtual void display = 0;};",
      "class base {public: virtual void display! = 0;};",
      "class base {public: virtual void display()=0;};",
      "class base {public: virtual void display()>0;};"
    ],
    answer: "class base {public: virtual void display()=0;};",
  },
  {
    question: "The stress that exists for weeks, months, or even years is called",
    options: [
      "Chronic stress",
      "Acute stress",
      "Negative stress",
      "Permanent stress"
    ],
    answer: "Chronic stress",
  },
  {
    question: "Stress that usually lasts for short time and may be due to work pressure, meeting deadlines pressure or minor accident, or any related matters is called",
    options: [
      "Chronic stress",
      "Acute stress",
      "Negative stress",
      "Permanent stress"
    ],
    answer: "Acute stress",
  },
  {
    question: "In a try-catch block, if exception is not caught in try block, the control must go to",
    options: [
      "catch block",
      "same try block again",
      "immediate line of code or normal immediate block",
      "throw block"
    ],
    answer: "catch block",
  },
  {
    question: "An example for intangible premises in planning is",
    options: [
      "capital investment",
      "Unit of production",
      "Cost per unit",
      "Goodwill"
    ],
    answer: "Goodwill",
  },
  {
    question: "Which of the following options are correct for the given question? The usage of \"virtual\" keyword before the member function is to achieve.... (i). Inheritance (ii). Compile time Polymorphism (iii). Runtime Polymorphism (iv). Static binding",
    options: [
      "(i) only",
      "(ii) and (iv) only",
      "(ii) and (iii) only",
      "(iii) only"
    ],
    answer: "(iii) only",
  },
  {
    question: "Which of the transport layer protocols is connectionless?",
    options: [
      "UDP",
      "TCP",
      "FTP",
      "Nvt"
    ],
    answer: "UDP",
  },
  {
    question: "Every context free language is context sensitive language",
    options: [
      "True",
      "False",
      "nothing",
      "True and False"
    ],
    answer: "True",
  },
  {
    question: "Propagation time of data packets is calculated using",
    options: [
      "transmission time + delay",
      "queuing time + processing delay",
      "distance/propagation speed",
      "message size/bandwidth"
    ],
    answer: "distance/propagation speed",
  },
  {
    question: "A SUBSET OF A NETWORK THAT INCLUDES ALL THE ROUTERS BUT CONTAINS NO LOOPS IS CALLED....",
    options: [
      "SPANNING TREE",
      "SPIDER STRUCTURE",
      "SPIDER TREE",
      "ACYCLIC TREE"
    ],
    answer: "SPANNING TREE",
  },
  {
    question: "regular ______ languages are the subset of context free languages.",
    options: [
      "grammar",
      "languages",
      "CNF",
      "GNF"
    ],
    answer: "languages",
  },
  {
    question: "if r and s are two regular expressions then expression r+s is also...",
    options: [
      "Regular expression",
      "Regular Laguage",
      "Regular set",
      "c and b"
    ],
    answer: "Regular expression",
  },
  {
    question: "Network congestion occurs.........",
    options: [
      "in case of traffic overloading",
      "when a system terminates",
      "when connection between two nodes terminates",
      "when connection between three nodes terminates"
    ],
    answer: "in case of traffic overloading",
  },
  {
    question: "Class ______ addresses are reserved for multicasting.",
    options: [
      "Class B",
      "Class C",
      "Class D",
      "Class E"
    ],
    answer: "Class D",
  },
  {
    question: "TCP/IP ______ layer corresponds to the OSI models to three layers.",
    options: [
      "Application",
      "Presentation",
      "Session",
      "Transport"
    ],
    answer: "Application",
  },
  {
    question: "PDA can recognise",
    options: [
      "any grammar",
      "only CFG",
      "only regular grammar",
      "any unambiguous grammar"
    ],
    answer: "only CFG",
  },
  {
    question: "A bus is one possible local area network topology. One advantage of a bus network is",
    options: [
      "the failure of one node does not affect the rest of the network",
      "the performance of the network is unaffected by the number of users",
      "failure of the main bus cable will only affect a few users",
      "it has the fastest performance of any network topology"
    ],
    answer: "the failure of one node does not affect the rest of the network",
  },
  {
    question: "The structure or format of data is called",
    options: [
      "Syntax",
      "Semantics",
      "Struct",
      "Formatting"
    ],
    answer: "Syntax",
  },
  {
    question: "is a communications protocol standard for transmitting small amounts of digital information using conventional FM Sound Broadcast techniques",
    options: [
      "Radio System",
      "Radio Data System",
      "Radio Broadcast Data System",
      "Broadcast Data System"
    ],
    answer: "Radio Data System",
  },
  {
    question: "What is Metropolitan Area Network?",
    options: [
      "Interconnection of several local area networks by bridging with a backbone line",
      "Interconnection of several local area networks without bridging with a backbone line",
      "Interconnection of several wireless local area networks by bridging with a backbone line",
      "Interconnection of several wireless local area networks by bridging with a coaxial cable"
    ],
    answer: "Interconnection of several local area networks by bridging with a backbone line",
  },
  {
    question: "Which of these is a disadvantage of a Bus network?",
    options: [
      "Expensive",
      "Needs extra hardware",
      "Slow",
      "To connect devices to each other"
    ],
    answer: "Slow",
  },
  {
    question: "What feature/flag limits the life of an IP packet on the network?",
    options: [
      "Time to Live counter",
      "Subnet Mask",
      "Header Checksum",
      "Wackamole field"
    ],
    answer: "Time to Live counter",
  },
  {
    question: "Which one of the following model induces administrative overload in a huge environment?",
    options: [
      "Rule based access control",
      "Directory based access control",
      "Lattice based access control",
      "ID based access control"
    ],
    answer: "Directory based access control",
  },
  {
    question: "An authentication factor which is physiological or behavioural characteristic unique to a subject is called?",
    options: [
      "Account ID",
      "Biometric factor",
      "Token",
      "IQ"
    ],
    answer: "Biometric factor",
  },
  {
    question: "Which of the following operating systems is not open source?",
    options: [
      "Windows",
      "BSD UNIX",
      "Linux",
      "PCLinuxOS"
    ],
    answer: "Windows",
  },
  {
    question: "is a set of software frameworks that provide additional services to application developers.",
    options: [
      "System programs",
      "Virtualization",
      "Cloud computing",
      "Middleware"
    ],
    answer: "Middleware",
  },
  {
    question: "What are some other terms for kernel-mode?",
    options: [
      "Supervisor mode",
      "System mode",
      "Privileged mode",
      "All of the above"
    ],
    answer: "All of the above",
  },
  {
    question: "The two separate modes of operating in a system are",
    options: [
      "Supervisor mode and system mode",
      "Kernel mode and privileged mode",
      "Physical mode and logical mode",
      "User mode and kernel mode"
    ],
    answer: "User mode and kernel mode",
  },
  {
    question: "Two important design issues for cache memory are",
    options: [
      "Speed and volatility",
      "Size and replacement policy",
      "Power consumption and reusability",
      "Size and access privileges"
    ],
    answer: "Size and replacement policy",
  },
  {
    question: "Which of the following statements concerning open-source operating systems is true?",
    options: [
      "Solaris is open source",
      "Source code is freely available",
      "They are always more secure than commercial, closed systems",
      "All open-source operating systems share the same set of goals"
    ],
    answer: "Source code is freely available",
  },
  {
    question: "In interactive environments such as time-sharing systems, the primary requirement is to provide reasonably good response time and in general, to share system resources equitably. In such situations, the scheduling algorithm that is most popularly applied is",
    options: [
      "Shortest Remaining Time Next (SRTN) Scheduling",
      "Priority Based Preemptive Scheduling",
      "Round Robin Scheduling",
      "None of the above"
    ],
    answer: "Round Robin Scheduling",
  },
  {
    question: "Embedded computers typically run on a ______ operating system",
    options: [
      "Real-time",
      "Windows XP",
      "Network",
      "Clustered"
    ],
    answer: "Real-time",
  },
  {
    question: "The most common secondary storage device is",
    options: [
      "Random-access memory",
      "Solid-state disks",
      "Tape drives",
      "Magnetic disk"
    ],
    answer: "Magnetic disk",
  },
  {
    question: "A ______ can be used to prevent a user program from never returning control to the operating system",
    options: [
      "Portal",
      "Program Counter",
      "Firewall",
      "Timer"
    ],
    answer: "Timer",
  },
  {
    question: "______ operating systems are designed primarily to maximize resource utilization.",
    options: [
      "PC",
      "Handheld computer",
      "Mainframe",
      "Network"
    ],
    answer: "Mainframe",
  },
  {
    question: "Which of the following file systems is supported by the windows OS?",
    options: [
      "NTFS",
      "FAT32",
      "exFAT",
      "All of the these"
    ],
    answer: "All of the these",
  },
  {
    question: "Bluetooth and 802.11 devices use wireless technology to communicate over several feet, in essence creating a",
    options: [
      "Local-area network",
      "Wide-area network",
      "Small-area network",
      "Metropolitan-area network"
    ],
    answer: "Local-area network",
  },
  {
    question: "A ______ is a custom build of the Linux operating system",
    options: [
      "LiveCD",
      "Installation",
      "Distribution",
      "VMWare Player"
    ],
    answer: "Distribution",
  },
  {
    question: "In what way is an operating system like a government?",
    options: [
      "It seldom functions correctly",
      "It creates an environment within which other programs can do useful work.",
      "It performs the most useful functions by itself.",
      "It is always concerned primarily with the individual's needs"
    ],
    answer: "It creates an environment within which other programs can do useful work.",
  },
  {
    question: "Which of the following statements are true?\nI. Shortest remaining time first scheduling may cause starvation\nII. Preemptive scheduling may cause starvation\nIII. Round robin is better than FCFS in terms of response time",
    options: [
      "I only",
      "I and III only",
      "II and III only",
      "I II and III only"
    ],
    answer: "I II and III only",
  },
  {
    question: "A clustered system",
    options: [
      "Gathers together multiple CPUs to accomplish computational work",
      "Is an operating system that provides file sharing across a network",
      "Is used when rigid time requirements are present",
      "Can only operate one application at a time"
    ],
    answer: "Gathers together multiple CPUs to accomplish computational work",
  },
  {
    question: "Which is the most optimal scheduling algorithm?",
    options: [
      "FCFS-First Come First Served",
      "Shortest Job First",
      "Round Robin",
      "None of the Mentioned"
    ],
    answer: "Shortest Job First",
  },
  {
    question: "Which of the following would lead you to believe that a given system is an SMP-type system?",
    options: [
      "Each processor is assigned a specific task",
      "There is a boss-worker relationship between the processors",
      "Each processor performs all tasks within the operating system",
      "None of the above"
    ],
    answer: "Each processor performs all tasks within the operating system",
  },
  {
    question: "A ______ provides a file-system interface that allows clients to create and modify files",
    options: [
      "Compute-server system",
      "File-server system",
      "Wireless network",
      "Network computer"
    ],
    answer: "File-server system",
  },
  {
    question: "Which of the following is a property of peer-to-peer systems?",
    options: [
      "Clients and servers are not distinguished from one another",
      "Separate machines act as either the client or the server but not both.",
      "They do not offer any advantages over traditional client-server systems",
      "They suffer from the server acting as the bottleneck in performance"
    ],
    answer: "Clients and servers are not distinguished from one another",
  },
  {
    question: "The portion of the process scheduler in an operating system that dispatches processes is concerned with",
    options: [
      "Assigning ready processes to CPU",
      "Assigning ready processes to the waiting queue",
      "Assigning running processes to blocked queue",
      "All of the mentioned"
    ],
    answer: "Assigning ready processes to CPU",
  },
  {
    question: "What is Scheduling?",
    options: [
      "Allowing a job to use the processor",
      "Making proper use of Processor",
      "None of the mentioned",
      "All of the mentioned"
    ],
    answer: "All of the mentioned",
  },
  {
    question: "The declaration unsigned u indicates:",
    options: [
      "u is a character",
      "u is an unsigned integer",
      "u is unsigned character",
      "u is unsigned long integer"
    ],
    answer: "u is an unsigned integer",
  },
  {
    question: "Following code converts c to\n`char c='A';\nc=c+'a'-65;`",
    options: [
      "to upper case",
      "to lower case",
      "to a number",
      "to character c"
    ],
    answer: "to lower case",
  },
  {
    question: "Which operator has the lowest precedence?",
    options: [
      "Sizeof",
      "Unary",
      "Assignment",
      "Comma"
    ],
    answer: "Comma",
  },
  {
    question: "Which operator produces the one's complement of the given binary value?",
    options: [
      "Logical AND",
      "Bitwise AND",
      "Logical OR",
      "Bitwise NOT"
    ],
    answer: "Bitwise NOT",
  },
  {
    question: "Which return type cannot return any value to the calling function?",
    options: [
      "int",
      "float",
      "void",
      "double"
    ],
    answer: "void",
  },
  {
    question: "Which of the following is a valid variable name?",
    options: [
      "Initial.Name",
      "A+B",
      "Samt",
      "Floats"
    ],
    answer: "Samt",
  },
  {
    question: "To check the equality of two variables a and b in C language",
    options: [
      "if (a=b)",
      "if (a equalto(b))",
      "if (a==b)",
      "if((a,b)==0)"
    ],
    answer: "if (a==b)",
  },
  {
    question: "To read a character and echo the character on to screen, with out the need to press enter key, appropriate function is",
    options: [
      "getchecho()",
      "getche()",
      "getchar()",
      "getcharecho()"
    ],
    answer: "getche()",
  },
  {
    question: "Memory is allocated for a function when the function is",
    options: [
      "declared",
      "defined",
      "called",
      "returned"
    ],
    answer: "called",
  },
  {
    question: "For using clrscr() function, the standard library file to be included",
    options: [
      "conio.h",
      "stdio.h",
      "math.h",
      "stdstream.h"
    ],
    answer: "conio.h",
  },
  {
    question: "The operator which compares two values is",
    options: [
      "Assignment",
      "Relational",
      "Unary",
      "Equality"
    ],
    answer: "Relational",
  },
  {
    question: "To find a raised to power of b, the function we would use is",
    options: [
      "a^b",
      "a**c",
      "pow(b,a)",
      "pow(a,b)"
    ],
    answer: "pow(a,b)",
  },
  {
    question: "Given a=00110010 (50). Write C statements to determine whether bit 1 in the above pattern is ON/OFF.(least significant bit is bit 0)",
    options: [
      "a & 0x03",
      "a | 0x03",
      "a & 0x02",
      "a ^ 0x02"
    ],
    answer: "a & 0x02",
  },
  {
    question: "ASCII value for A, Z are",
    options: [
      "66,91",
      "65,90",
      "97, 122",
      "96 121"
    ],
    answer: "65,90",
  },
  {
    question: "ASCII value for a, z are",
    options: [
      "66,91",
      "65,90",
      "97, 122",
      "96, 121"
    ],
    answer: "97, 122",
  },
  {
    question: "What will be output for printf(\"%c\", 65);",
    options: [
      "65",
      "A",
      "10",
      "a"
    ],
    answer: "A",
  },
  {
    question: "What is ascii value for 0 and 9",
    options: [
      "48,57",
      "31,40",
      "31,39",
      "56,64"
    ],
    answer: "48,57",
  },
  {
    question: "$*(\\&num)$ is equivalent to writing",
    options: [
      "&num",
      "*num",
      "num",
      "0"
    ],
    answer: "num",
  },
  {
    question: "Which operator is used to dereference a pointer?",
    options: [
      "&",
      "*",
      "->",
      "."
    ],
    answer: "*",
  },
  {
    question: "Which operator retrieves the lvalue of a variable?",
    options: [
      "&",
      "*",
      "#",
      "@"
    ],
    answer: "&",
  },
  {
    question: "Conversion specifier for string in scanf statement are",
    options: [
      "%d",
      "%f",
      "%c",
      "%s"
    ],
    answer: "%s",
  },
  {
    question: "In the template <class T> declaration, what is T stands for",
    options: [
      "a generic data type",
      "an arbitrary class",
      "a class defined earlier",
      "none of the above"
    ],
    answer: "a generic data type",
  },
  {
    question: "means that when a system is in use, subjects and objects levels and compartments do not change",
    options: [
      "Weak Tranquility",
      "Tranquility",
      "Normal Operation",
      "Unclassified Level"
    ],
    answer: "Tranquility",
  },
  {
    question: "The ______ requires that a subject S can read an object O only if S dom O and any DAC permits it ('read down')",
    options: [
      "Simple Security Condition",
      "Complex security condition",
      "*-Property",
      "Multi lateral security"
    ],
    answer: "Simple Security Condition",
  },
  {
    question: "If (s,o,a) ∈ b and access is in observe mode, then fS(s) ≥ fO(o)",
    options: [
      "Simple Security (ss)-Property",
      "Discretionary Security (ds)-Property",
      "Security Property (sp)",
      "Discretionary Simple (ds)-Property"
    ],
    answer: "Simple Security (ss)-Property",
  },
  {
    question: "In Biba Model a subjects can only read an object o if",
    options: [
      "$I_S > I_o$",
      "$L_O > L_S$",
      "$I_S \\le I_o$",
      "$L_O \\le L_S$"
    ],
    answer: "$I_S \\le I_o$",
  },
  {
    question: "In clark Wilson model CDIs can only be manipulated by",
    options: [
      "Integrity procedure",
      "Transforamtion procedure",
      "Unconstrained data procedure",
      "Integrity verfication procedure"
    ],
    answer: "Transforamtion procedure",
  },
  {
    question: "means ensuring timely and reliable access to and the use of information.",
    options: [
      "Integrity",
      "Availability",
      "Confidentiality",
      "Threat intelligence"
    ],
    answer: "Availability",
  },
  {
    question: "includes activities to protect the usability, reliability, integrity and safety of the network",
    options: [
      "Disaster security",
      "Information security",
      "Network security",
      "Application security"
    ],
    answer: "Network security",
  },
  {
    question: "Which of the following policy that an organization has to check how the availability of data is made online 24/7?",
    options: [
      "Contingency Planning Policy",
      "Backup Policy",
      "Retention Policy",
      "Data Classification Policy"
    ],
    answer: "Backup Policy",
  },
  {
    question: "The ______ implements Multi-Lateral security by adding compartments",
    options: [
      "Biba's model",
      "Integrity Policies",
      "Bell-LaPadula model",
      "Low Water Mark"
    ],
    answer: "Bell-LaPadula model",
  },
  {
    question: "The ______ model does not give users power to alter access control in the system manifested in a principle called tranquility",
    options: [
      "Bell-LaPadula model",
      "Biba model",
      "Low Water Mark model",
      "Ring model"
    ],
    answer: "Bell-LaPadula model",
  },
  {
    question: "means preserving the authorized restriction on the access and disclosure, including means for protecting personal privacy and proprietary information.",
    options: [
      "Availability",
      "Integrity",
      "Confidentiality",
      "Threat intelligence"
    ],
    answer: "Confidentiality",
  },
  {
    question: "The Bell-LaPadula model leverages mandatory",
    options: [
      "Access control",
      "Kernel control",
      "System control",
      "Privacy control"
    ],
    answer: "Access control",
  },
  {
    question: "To determine whether the stream object is currently associated with a file ______ member function is used",
    options: [
      "is_open",
      "Buf",
      "String",
      "None of the above"
    ],
    answer: "is_open",
  },
  {
    question: "Trait theory ignores",
    options: [
      "the physical traits of leaders.",
      "the aspects of honesty and integrity.",
      "the interactions of leaders and their group members as well as situational factors.",
      "the fact that leaders should be able to create visions and solve problems."
    ],
    answer: "the interactions of leaders and their group members as well as situational factors.",
  },
  {
    question: "Which of the following statements about leadership is false?",
    options: [
      "Leadership does not necessarily take place within a hierarchical structure of an organisation",
      "Not every leader is a manager",
      "When people operate as leaders their role is always clearly established and defined.",
      "All the other answers are correct."
    ],
    answer: "When people operate as leaders their role is always clearly established and defined.",
  },
  {
    question: "Ethical conduct builds trust among individuals and in business relationships, which validates and promotes confidence in business relationships.",
    options: [
      "Ethical conduct",
      "Social responsibility",
      "Ethical responsibility",
      "Business ethics"
    ],
    answer: "Ethical conduct",
  },
  {
    question: "You fail to back up your files and then drop your laptop breaking it into many small pieces. You have just failed to address which aspect of the CIA Triad?",
    options: [
      "Confidentiality",
      "Integrity",
      "Availability",
      "Authentication"
    ],
    answer: "Availability",
  },
  {
    question: "Lakshan sends an encrypted message to Ruhan but it is intercepted by Tanish. Tanish cannot read it but forwards it on to Ruhan from an anonymous address she controls. Which precept of the CIA Triad would have been violated?",
    options: [
      "Confidentiality",
      "Integrity",
      "Availability",
      "Authentication"
    ],
    answer: "Authentication",
  },
  {
    question: "A rule of thumb is if you can find another company which can do a non-core activity better and faster,",
    options: [
      "you should keep producing.",
      "you should compete with the company.",
      "you should outsource.",
      "you should increase your efficiency."
    ],
    answer: "you should outsource.",
  },
  {
    question: "Contingency theories of leadership are based on the belief that:",
    options: [
      "there is no single style of leadership appropriate to all situations.",
      "there is a single style of leadership appropriate to all managers.",
      "there is a single style of leadership appropriate to all situations.",
      "None of the other answers is correct."
    ],
    answer: "there is no single style of leadership appropriate to all situations.",
  },
  {
    question: "Social responsibility is",
    options: [
      "the same as legal responsibility.",
      "broader than legal responsibility.",
      "narrower than legal responsibility.",
      "None of the other answers is correct."
    ],
    answer: "broader than legal responsibility.",
  },
  {
    question: "When determining the most appropriate form of leadership, which of the following should be considered?",
    options: [
      "The manager.",
      "The work environment.",
      "The group.",
      "All the other options are correct."
    ],
    answer: "All the other options are correct.",
  },
  {
    question: "The following phrase is used to describe a leader:",
    options: [
      "relies on control strategies",
      "challenges the status quo",
      "uses traditional influence",
      "acts with established culture"
    ],
    answer: "challenges the status quo",
  },
  {
    question: "Why is autocratic leadership considered negative?",
    options: [
      "people are uninformed, insecure and afraid of the leader",
      "leader is extra friendly",
      "too much confusion arises",
      "it is very participative"
    ],
    answer: "people are uninformed, insecure and afraid of the leader",
  },
  {
    question: "A contingency model of leadership is the path-goal theory. This suggests that subordinates will see leadership behaviour as a motivating influence if:",
    options: [
      "path-goal relationships are clarified.",
      "their effective performance will satisfy their needs.",
      "the necessary direction, guidance, training, and support is provided.",
      "all the other options are correct."
    ],
    answer: "all the other options are correct.",
  },
  {
    question: "What happens to a task force after it finishes its assignment?",
    options: [
      "It is integrated with the organisation.",
      "It is disbanded.",
      "It continues after accomplishment.",
      "None of the other answers is correct."
    ],
    answer: "It is disbanded.",
  },
  {
    question: "Which of the following is true of effective information sharing in an organization?",
    options: [
      "Information should be shared vertically, but not horizontally.",
      "Vertical linkages are designed primarily for coordination and collaboration.",
      "The structure should fit the information requirements of the organization.",
      "It is not possible to give people a lot of information."
    ],
    answer: "The structure should fit the information requirements of the organization.",
  },
  {
    question: "Which of the following is an ethical behaviour?",
    options: [
      "Giving less remuneration to the employees.",
      "Selling inferior goods.",
      "Honest behaviour with the customer.",
      "Polluting the environment."
    ],
    answer: "Honest behaviour with the customer.",
  },
  {
    question: "The 'means' of leadership involve",
    options: [
      "getting results through others.",
      "the ability to build cohesive, goal-oriented teams.",
      "the process of influencing an organized group toward accomplishing its goals",
      "the process of forcibly making others comply.."
    ],
    answer: "the process of influencing an organized group toward accomplishing its goals",
  },
  {
    question: "The transformational leadership style",
    options: [
      "encourages group members to transform themselves into better people.",
      "strives to change the group members' opinions by showing them a better way to think.",
      "changes opinions and attitudes without changing behaviours.",
      "encourages and inspires group members to go above and beyond selfish interests and do what is best for the common good of the group."
    ],
    answer: "encourages and inspires group members to go above and beyond selfish interests and do what is best for the common good of the group.",
  },
  {
    question: "As a professional, what should be your primary source of ethical guidance in the workplace?",
    options: [
      "corporate HR policies",
      "corporate code of ethics",
      "corporate mission statement",
      "corporate procedures"
    ],
    answer: "corporate code of ethics",
  },
  {
    question: "Which of the following statements is false about the behavioural theories of leadership?",
    options: [
      "Consideration is people-oriented",
      "Production-orientation has little concern for people",
      "High initiating structure leaders do not set deadlines.",
      "Employee-centred leader behaviour focuses on people."
    ],
    answer: "High initiating structure leaders do not set deadlines.",
  },
  {
    question: "Environmental protection can best be done by the efforts of",
    options: [
      "business people.",
      "the scientists.",
      "the government.",
      "all the people."
    ],
    answer: "all the people.",
  },
  {
    question: "Which style of leadership focuses on goals, standards, and organization?",
    options: [
      "task leadership",
      "social leadership",
      "semantic leadership",
      "transformational leadership"
    ],
    answer: "task leadership",
  },
  {
    question: "Responsibility always flows from",
    options: [
      "Superior to subordinate",
      "Subordinate to superior",
      "Both from the superior to the subordinate, and from the subordinate to the superior",
      "None of the answers is correct"
    ],
    answer: "Superior to subordinate",
  },
  {
    question: "Which term refers to the discipline that deals with what is good and bad or right and wrong?",
    options: [
      "morals and traditions",
      "social responsibility",
      "ethics",
      "cultural norms"
    ],
    answer: "ethics",
  },
  {
    question: "The managerial grid used the behavioural dimensions 'concern for people' and",
    options: [
      "Concern for integrity",
      "Concern for profit",
      "Concern for environment",
      "Concern for production"
    ],
    answer: "Concern for production",
  },
  {
    question: "What is the name of the process in which an employee informs another responsible employee in the company about potentially unethical behavior?",
    options: [
      "Whistleblowing",
      "Purging and releasing",
      "Identification",
      "Information transfer"
    ],
    answer: "Whistleblowing",
  },
  {
    question: "Triple Bottom Line reporting refers to:",
    options: [
      "using a low, medium, and high estimates for profitability forecasts.",
      "measuring the impact of the firm on stockholders, customers, and employees",
      "measuring the social, environmental, and financial performance of the firm.",
      "measuring the impact of local, state, and federal governments on the firm."
    ],
    answer: "measuring the social, environmental, and financial performance of the firm.",
  },
  {
    question: "Planning function of management is performed by",
    options: [
      "Top Management",
      "Middle Management",
      "Lower Management",
      "All of the above"
    ],
    answer: "All of the above",
  },
  {
    question: "The managerial function of organizing is",
    options: [
      "to review and adjust the plan in light of changing conditions",
      "to establish a program for the accomplishment of objectives",
      "to create a structure of function and duties to be performed by a group of people",
      "to get things done through and with the help of people"
    ],
    answer: "to create a structure of function and duties to be performed by a group of people",
  },
  {
    question: "Ethics training should",
    options: [
      "start at the bottom and move upward through all organizational levels.",
      "focus only on the employees who deal with the public on a day-to-day basis.",
      "begin at the top and continue through all levels of the organization.",
      "start with mid-level management and move laterally through the organization."
    ],
    answer: "begin at the top and continue through all levels of the organization.",
  },
  {
    question: "Early research on leadership traits",
    options: [
      "sought to prove that charisma was an essential trait of leadership",
      "focused on behavioural traits rather than physical traits of a leader",
      "found consistent and unique traits that would apply to all effective leaders",
      "focused on characteristics that might differentiate leaders from non-leaders"
    ],
    answer: "focused on characteristics that might differentiate leaders from non-leaders",
  },
  {
    question: "The concept of ______ has evolved from the traditional view of corporate social responsibility.",
    options: [
      "social scaffolding",
      "planetary progressivism",
      "work-life balance",
      "corporate sustainability"
    ],
    answer: "corporate sustainability",
  },
  {
    question: "The view that sees profit maximization as the main objective is known as:",
    options: [
      "Shareholder theory",
      "Principal-agent problem",
      "Stakeholder theory",
      "Corporation theory"
    ],
    answer: "Shareholder theory",
  },
  {
    question: "By comparing ______ with standards, the manager can know whether the goals are achieved or not.",
    options: [
      "Risk",
      "Ideas",
      "Actual performance",
      "Costs"
    ],
    answer: "Actual performance",
  },
  {
    question: "The process of planning starts with clearly laying down of",
    options: [
      "Policies",
      "Procedures",
      "Goals and Objectives",
      "All of the Above"
    ],
    answer: "Goals and Objectives",
  },
  {
    question: "According to the Ohio State studies, ______ refers to the extent to which a leader is likely to define and shape his or her role and the roles of group members in the search for goal attainment.",
    options: [
      "people orientation",
      "production orientation",
      "initiating structure",
      "consideration"
    ],
    answer: "initiating structure",
  },
  {
    question: "Why, according to stakeholder theory, is it in companies' best interests to pay attention to their stakeholders?",
    options: [
      "If firms only act in their own self-interest, employees may feel exploited.",
      "If firms only act in their own self-interest, the government might put more regulation on them.",
      "If firms only act in their own self-interest, customers might not like the image that the company portrays.",
      "If firms only act in their own self-interest and inflict harm on stakeholders, then society might withdraw its support"
    ],
    answer: "If firms only act in their own self-interest and inflict harm on stakeholders, then society might withdraw its support",
  },
  {
    question: "The implied, enforced, or felt obligation of managers, acting in their official capacities, to serve or protect the interests of groups other than themselves is known as",
    options: [
      "human resource ethics",
      "environmental morality",
      "corporate social responsibility",
      "business-centred morality"
    ],
    answer: "corporate social responsibility",
  },
  {
    question: "Management as a discipline refers to",
    options: [
      "Group of managers",
      "Functions of management",
      "Subject of management",
      "All of these"
    ],
    answer: "Subject of management",
  },
  {
    question: "Which one of the following describes the leadership style in which the leader generally gives the group complete freedom to make decisions and complete the work in whatever way it sees fit?",
    options: [
      "facilitative style",
      "delegative style",
      "democratic style",
      "laissez-faire style"
    ],
    answer: "laissez-faire style",
  },
  {
    question: "Who is the father of modern management?",
    options: [
      "FW Taylor",
      "Henry Fayol",
      "Peter Drucker",
      "None of these"
    ],
    answer: "Henry Fayol",
  },
  {
    question: "Who is the father of Personnel Management?",
    options: [
      "FW Taylor",
      "Henry Fayol",
      "Peter Drucker",
      "Robert Owen"
    ],
    answer: "Robert Owen",
  },
  {
    question: "Persons who can influence others and who possess managerial authority are termed",
    options: [
      "entrepreneurs",
      "leaders",
      "managers",
      "visionaries"
    ],
    answer: "leaders",
  },
  {
    question: "According to Burns and Stalker, which of the following is a feature of organic organisations?",
    options: [
      "Emphasis on vertical communication channels",
      "Prestige drawn from personal contribution",
      "Stress on obedience to superiors and loyalty to the organisation",
      "Knowledge requirement based on job"
    ],
    answer: "Prestige drawn from personal contribution",
  },
  {
    question: "In his book, Capitalism and Freedom, Milton Friedman argues that",
    options: [
      "doing well while doing good is an essential corporate mantra",
      "socially responsible behaviour adds to the corporation's bottom line",
      "corporations are responsible for the environment, society, and profits",
      "the only social responsibility of business is to increase profits"
    ],
    answer: "the only social responsibility of business is to increase profits",
  },
  {
    question: "All of the following are elements of planning EXCEPT:",
    options: [
      "Developing Plans",
      "Monitoring Performance",
      "Establishing Strategies",
      "Coordinate Activities"
    ],
    answer: "Monitoring Performance",
  },
  {
    question: "Which of the following is not right about the formal organization",
    options: [
      "Deliberately planned & created by management",
      "Stable & predictable",
      "Violation of rules may lead to penalties",
      "Managers are chosen"
    ],
    answer: "Managers are chosen",
  },
  {
    question: "Charles Babbage was a professor of ______ subject",
    options: [
      "Computer Science",
      "Mathematics",
      "Management",
      "Economics"
    ],
    answer: "Mathematics",
  },
  {
    question: "Thackeray Manufacturing recently developed a code of ethics. Which of the following topics is most likely covered in the document?",
    options: [
      "business conduct",
      "fair competition",
      "HR issues",
      "All the other answers are correct"
    ],
    answer: "All the other answers are correct",
  },
  {
    question: "Which one of the following describes the leadership style in which a leader tends to centralize authority, dictate work methods, make unilateral decisions, and limit employee participation?",
    options: [
      "authoritarian style",
      "autocratic style",
      "democratic style",
      "laissez-faire style"
    ],
    answer: "autocratic style",
  },
  {
    question: "The Directors' responsibilities are unlikely to include.",
    options: [
      "a fiduciary duty",
      "a duty to keep proper accounting records",
      "a duty to propose high dividends for shareholders",
      "a duty of care"
    ],
    answer: "a duty to propose high dividends for shareholders",
  },
  {
    question: "A ______ of an issue consists of weighing and balancing all of the competing demands on a firm by each of those who have a claim on it.",
    options: [
      "stakeholder analysis",
      "board of directors' analysis",
      "corporation analysis",
      "management analysis"
    ],
    answer: "stakeholder analysis",
  },
  {
    question: "Greetwell Technologies wants to gain the confidence of employees and customers by developing a strong ethical culture. Which of the following methods would be the best way for the firm's HR department to accomplish this goal?",
    options: [
      "placing the code of ethics on the firm's intranet",
      "posting the code of ethics in the breakroom",
      "providing ethics training to employees",
      "having employees sign ethics contracts"
    ],
    answer: "providing ethics training to employees",
  },
  {
    question: "Which term refers to a systematic assessment of a company's activities in terms of social impact?",
    options: [
      "managerial appraisal",
      "social audit",
      "social responsibility metric",
      "ethics audit"
    ],
    answer: "social audit",
  },
  {
    question: "When employee satisfaction is measured, employees seemed to be more satisfied under a(n) ______ leadership style than under a(n) ______ one.",
    options: [
      "laissez-faire; participative",
      "supportive; laissez-faire",
      "democratic; directive",
      "democratic; autocratic"
    ],
    answer: "democratic; autocratic",
  },
  {
    question: "According to the University of Iowa behavioural studies, group members' satisfaction levels were generally",
    options: [
      "higher under a supportive leader in the long run.",
      "improved when the leader was production oriented",
      "maintained when the leader was directive in the short run",
      "higher under a democratic leader than under an autocratic one"
    ],
    answer: "higher under a democratic leader than under an autocratic one",
  },
  {
    question: "Management as a process refers to",
    options: [
      "Group of managers",
      "Functions of management",
      "Subject of management",
      "All of these"
    ],
    answer: "Functions of management",
  },
  {
    question: "Management as a Noun refers to",
    options: [
      "Group of managers",
      "Functions of management",
      "Subject of management",
      "All of these"
    ],
    answer: "Group of managers",
  },
  {
    question: "Who presented the paper \"Engineer as an Economist\"?",
    options: [
      "F W Taylor",
      "Henry Robinson Towne",
      "Peter Drucker",
      "Robert Owen"
    ],
    answer: "Henry Robinson Towne",
  },
  {
    question: "The University of Michigan studies used the two dimensions of ______ and ______ to study behavioural characteristics of leaders.",
    options: [
      "employee oriented; production oriented",
      "consideration; initiating structure",
      "task; people",
      "decision-making; employee development"
    ],
    answer: "employee oriented; production oriented",
  },
  {
    question: "The model in which environmental, social, and economic responsibilities are satisfied concurrently is known as",
    options: [
      "corporate social responsibility",
      "global activism",
      "giving back to the planet",
      "restoration and revivification"
    ],
    answer: "corporate social responsibility",
  },
  {
    question: "F+ for the set of functional dependencies $F=\\{A->B,B->C\\}$ is",
    options: [
      "{A->A,B->B,C->C,A->B, B-->C,A-->C}",
      "{A->B, B->C,AB->C}",
      "{A->A,B->B,C->C B->C,A-->C}",
      "{A->A,B->B,C->C}"
    ],
    answer: "{A->A,B->B,C->C,A->B, B-->C,A-->C}",
  },
  {
    question: "Select transitive dependency from the following",
    options: [
      "x-->y then wy-->z",
      "$X-->YZ$ then $X-->Y$, $X-->Z$",
      "$X-->Y$, $Y-->Z$ then $X-->Z$",
      "X-->Y then $XZ-->YZ$"
    ],
    answer: "$X-->Y$, $Y-->Z$ then $X-->Z$",
  },
  {
    question: "Which of the functional dependencies is not true in a real world scenario",
    options: [
      "registrationnumber --> name",
      "pincode --> district",
      "personname-->city",
      "country-->capital"
    ],
    answer: "personname-->city",
  },
  {
    question: "A-->A according to rule of",
    options: [
      "Reflexivity",
      "Transitivity",
      "Union",
      "Decomposition"
    ],
    answer: "Reflexivity",
  },
  {
    question: "Select the query that establishes the foreign key constraint between the given two tables. Here proctor id is a foreign key in the student table.\nstudent(regno number, name varchar2(10), address varchar2(10), proctorid number);\nproctor(proctorid number, proctorname varchar2(10))",
    options: [
      "alter table student add constraint foreign key references proctor(proctorid);",
      "alter table student add constraint student_proctorid_fr foreign key references proctor(proctorid);",
      "alter table student add constraint student_proctorid_fr foreign key(proctorid) references student(proctorid);",
      "alter table student add constraint student_proctorid_fr foreign key(proctorid) references proctor(proctorid);"
    ],
    answer: "alter table student add constraint student_proctorid_fr foreign key(proctorid) references proctor(proctorid);",
  },
  {
    question: "The query to add a unique constraint using alter table command on name column in the proctor table is\nproctor(id number, name varchar2(10),numberofstudents number, address varchar2(10));",
    options: [
      "alter table proctor constraint proctor_name_uk unique(name);",
      "alter table proctor add constraint proctor_name_uk unique;",
      "alter table proctor add constraint proctor_name_uk unique(name);",
      "alter table proctor add proctor_name_uk unique(name);"
    ],
    answer: "alter table proctor add constraint proctor_name_uk unique(name);",
  },
  {
    question: "A multivalued dependency X multidetermines y is trivial if",
    options: [
      "Y is a subset of X",
      "X is a subset of Y",
      "X Union Y equals R",
      "Y is a subset of X or X Union Y equals R"
    ],
    answer: "Y is a subset of X or X Union Y equals R",
  },
  {
    question: "The relational schema in fourth normal form should not have",
    options: [
      "Multi Valued Dependencies",
      "Transitive Dependencies",
      "Partial Key Dependencies",
      "Should not have any of the given dependencies"
    ],
    answer: "Multi Valued Dependencies",
  },
  {
    question: "is a placeholder name which will be determined when the class is instantiated.",
    options: [
      "Ttype",
      "type",
      "Type",
      "None"
    ],
    answer: "Type",
  },
  {
    question: "For declaring class templates, ______ of the arguments in template declaration may be non-generic ordinary data types.",
    options: [
      "Some",
      "all",
      "None of the argument",
      "One"
    ],
    answer: "Some",
  },
  {
    question: "Templates ______ some common errors found in code that makes heavy use of function-like macros",
    options: [
      "Reject",
      "Allow",
      "Discard",
      "None"
    ],
    answer: "Reject",
  },
  {
    question: "provide member functions for repositioning the file-position pointer.",
    options: [
      "istream",
      "ostream",
      "istream and ostream",
      "None"
    ],
    answer: "istream and ostream",
  },
  {
    question: "The file-position pointer is ______ value that specifies the location in the file as a number of bytes from the file's starting location",
    options: [
      "Integer",
      "Float",
      "Null",
      "None"
    ],
    answer: "Integer",
  },
  {
    question: "it is necessary for a programming language that it must support all these ______ features completely to become a pure Object-Oriented Language.",
    options: [
      "encapsulation, inheritance, and polymorphism",
      "encapsulation and polymorphism",
      "Inheritance, and polymorphism",
      "Encapsulation and inheritance"
    ],
    answer: "encapsulation, inheritance, and polymorphism",
  },
  {
    question: "Let L and L' be a language and its complement. Which one of the following posibilities will not hold?",
    options: [
      "L and L' are recursive",
      "L is recursively enumerable but not recursive and L' is not recursively enumerable.",
      "L and L' are not recursively enumerable",
      "L and L' are recursively enumerable but not recursive."
    ],
    answer: "L and L' are recursively enumerable but not recursive.",
  },
  {
    question: "Which of the following statements is false?",
    options: [
      "The halting problem for Turing machine is undecidable.",
      "Determining whether a context-free grammar is ambiguous is undecidable.",
      "Given two arbitrary context-free grammars, G₁ and G₂, it is undecidable with L(G₁) = L(G₂)",
      "Given two regular grammars G₁ and G₂, it is undecidable whether L(G₁) = L(G₂)"
    ],
    answer: "Given two regular grammars G₁ and G₂, it is undecidable whether L(G₁) = L(G₂)",
  },
  {
    question: "The statement \" A Turing machine cannot solve halting problem\" is",
    options: [
      "True",
      "False",
      "Still an open problem",
      "Cannot say"
    ],
    answer: "True",
  },
  {
    question: "Context-sensitive languages can be recognized by",
    options: [
      "Deterministic PDA",
      "Non-deterministic PDA",
      "Linear bounded automaton",
      "Finite state automaton"
    ],
    answer: "Linear bounded automaton",
  },
  {
    question: "A multi-head TM can be simulated by a single head TM",
    options: [
      "True",
      "False",
      "Some times",
      "None of the choices."
    ],
    answer: "True",
  },
  {
    question: "The complent of the universal language Lu is",
    options: [
      "Recursively enumerable",
      "Not recursively enumerable",
      "Recursively enumerable but not recursive",
      "Recursive"
    ],
    answer: "Not recursively enumerable",
  },
  {
    question: "Every non-deterministic TM can be simulated by a deterministic TM",
    options: [
      "True",
      "False",
      "Some times",
      "None of the choices."
    ],
    answer: "True",
  },
  {
    question: "Select the valid statement about C structure.",
    options: [
      "Structure elements are stored on random free memory locations",
      "Structure elements are stored in register memory locations",
      "Structure elements are stored in contiguous memory locations",
      "Structure elements are stored in detached memory locations"
    ],
    answer: "Structure elements are stored in contiguous memory locations",
  },
  {
    question: "The address operator & cannot act on",
    options: [
      "R-values and Arithmetic expressions",
      "Local variables",
      "Global variables",
      "Member of a structure"
    ],
    answer: "R-values and Arithmetic expressions",
  },
  {
    question: "which of the following is the correct way of declaring a float pointer variable:",
    options: [
      "float ptr;",
      "float **ptr;",
      "*float ptr;",
      "float *ptr;"
    ],
    answer: "float *ptr;",
  },
  {
    question: "What is the output of the following C code?\n`void main() {\n struct laptop {\n  int cost;\n  char brand [10];\n };\n struct laptop L1={5000, \"ACER\"};\n struct laptop L2={6000, \"IBM\"};\n printf(\"Name=%s\", strcat(L1.brand, L2.brand));\n}`",
    options: [
      "ACERIBM",
      "IBM ACER",
      "ACER IBM",
      "IBMACER"
    ],
    answer: "ACERIBM",
  },
  {
    question: "Choose the correct statement about C structure.",
    options: [
      "Structure members cannot be initialized at the time of declaration",
      "Structure elements can be initialized at the time of declaration.",
      "Only integer members of structure can be initialized at the time of declaration",
      "Only float members of structure can be initialized at the time of declaration"
    ],
    answer: "Structure elements can be initialized at the time of declaration.",
  },
  {
    question: "State the following statement is true or false.\n(i) In class B addresses a total of more than 1 billion addresses can be formed.\n(ii) Class E addresses are reserved for future or experimental use.",
    options: [
      "True, False",
      "True, True",
      "False, True",
      "False, False"
    ],
    answer: "False, True",
  },
  {
    question: "..is the protocol suite for the current Internet.",
    options: [
      "TCP/IP",
      "NCP",
      "UNIX",
      "ACM"
    ],
    answer: "TCP/IP",
  },
  {
    question: "Which of the following pieces of information can be found in the IP header?",
    options: [
      "Source address of the IP packet",
      "Destination address for the IP packet",
      "Sequence number of the IP packet",
      "Both Source address of the IP packet and Destination address for the IP packet"
    ],
    answer: "Both Source address of the IP packet and Destination address for the IP packet",
  },
  {
    question: "Which layer of the OSI reference model has service point addressing",
    options: [
      "session layer",
      "physical layer",
      "transport layer",
      "data link layer"
    ],
    answer: "transport layer",
  },
  {
    question: "WHICH LAYER LINKS THE NETWORK SUPPORT LAYERS AND USER SUPPORT LAYERS?",
    options: [
      "SESSION LAYER",
      "DATA LINK LAYER",
      "TRANSPORT LAYER",
      "NETWORK LAYER"
    ],
    answer: "TRANSPORT LAYER",
  },
  {
    question: "The standard suit of protocols used by the Internet, Intranets, extranets and some other networks.",
    options: [
      "Protocol",
      "TCP/IP",
      "Open system",
      "Internet work processor"
    ],
    answer: "TCP/IP",
  },
  {
    question: "WHICH ADDRESS IDENTIFIES A PROCESS ON A HOST?",
    options: [
      "PHYSICAL ADDRESS",
      "LOGICAL ADDRESS",
      "PORT ADDRESS",
      "SPECIFIC ADDRESS"
    ],
    answer: "PORT ADDRESS",
  },
  {
    question: "End-to-end connectivity is provided from host-to-host in:",
    options: [
      "Network layer",
      "Session layer",
      "Transport layer",
      "Data link layer"
    ],
    answer: "Transport layer",
  },
  {
    question: "ICMP IS PRIMARILY USED FOR.....",
    options: [
      "ERROR AND DIAGNOSTIC FUNCTIONS",
      "ADDRESSING",
      "FORWARDING",
      "REVERSING"
    ],
    answer: "ERROR AND DIAGNOSTIC FUNCTIONS",
  },
  {
    question: "Class ______ address use 8 bits for the <network> and 24 bits for the <host> portion of the IP address.",
    options: [
      "Class A",
      "Class B",
      "Class C",
      "Class D"
    ],
    answer: "Class A",
  },
  {
    question: "THE 4 BYTE IP ADDRESS CONSISTS OF....",
    options: [
      "NETWORK ADDRESS",
      "HOST ADDRESS",
      "BOTH NETWORK ADDRESS and HOST ADDRESS",
      "MAC ADDRESS"
    ],
    answer: "BOTH NETWORK ADDRESS and HOST ADDRESS",
  },
  {
    question: "How many bits internet address is assigned to each host on a TCP/IP internet which is used in all information exchange with the host?",
    options: [
      "16 bits",
      "32 bits",
      "48 bits",
      "64 bits"
    ],
    answer: "32 bits",
  },
  {
    question: "What is the default subnet mask for a class C network?",
    options: [
      "127.0.0.1",
      "255.0.0.0",
      "255.255.0.0",
      "255.255.255.0"
    ],
    answer: "255.255.255.0",
  },
  {
    question: "Class NP problems are:",
    options: [
      "verifiable in polynomial time",
      "Solvable in polynomial time",
      "Not Solvable in Non polynomial time",
      "None"
    ],
    answer: "verifiable in polynomial time",
  },
  {
    question: "Which of the following statement is correct for Recursion",
    options: [
      "Structure or code representation is complex.",
      "First in First out principle.",
      "Required more memory space to hold intermediate results on the system stacks.",
      "Took less time than iterative method."
    ],
    answer: "Required more memory space to hold intermediate results on the system stacks.",
  },
  {
    question: "NP class of decision problem can be:",
    options: [
      "Solved by non-deterministic polynomial algorithms",
      "Solved by deterministic polynomial algorithms",
      "Solved by polynomial algorithms",
      "None"
    ],
    answer: "Solved by non-deterministic polynomial algorithms",
  },
  {
    question: "Tractable problems mean",
    options: [
      "Problems that cannot be solved in polynomial time",
      "Problems that can be solved in polynomial time",
      "Problems that can be solved in constant time",
      "Problems that can be solved in non-polynomial time"
    ],
    answer: "Problems that can be solved in polynomial time",
  },
  {
    question: "P class problem means:",
    options: [
      "Problems that can be solvable in polynomial time",
      "Tractable problems.",
      "whose time complexity is O(N^c) where N is input size and C is constant",
      "All"
    ],
    answer: "All",
  },
  {
    question: "SAT or B-SAT is an example for",
    options: [
      "NP-Hard",
      "NP-Complete",
      "P",
      "None"
    ],
    answer: "NP-Complete",
  },
  {
    question: "If every problem in NP can be polynomial-time reducible to a problem \"A,\" and \"A\" is also in NP, then \"A\" is called:",
    options: [
      "NP-Hard",
      "NP-Complete",
      "P",
      "None"
    ],
    answer: "NP-Complete",
  },
  {
    question: "Which of the following way is best to represent the algorithms",
    options: [
      "English literature step by step",
      "Flowchart",
      "Pseudocode",
      "None"
    ],
    answer: "Pseudocode",
  },
  {
    question: "Analysis of an Algorithms means",
    options: [
      "Determine the amount of space to store on the hard disk",
      "Determine the amount of duration to execute or RUN",
      "Determining the amount of electrical power to complete the algorithm task.",
      "Determining the required number of instructions and storage memory required for an algorithm."
    ],
    answer: "Determining the required number of instructions and storage memory required for an algorithm.",
  },
  {
    question: "In algorithm analysis, Constant time means?",
    options: [
      "Algorithm terminates after a specified time.",
      "Algorithm automatically produces output in a specified constant time.",
      "Algorithm checks whether it can be completed in a given time or not.",
      "Algorithm requires the same fixed number of steps (regardless of) independent of the input size."
    ],
    answer: "Algorithm requires the same fixed number of steps (regardless of) independent of the input size.",
  },
  {
    question: "The number of edges from the root to the node is called ______ of the tree.",
    options: [
      "Height",
      "Depth",
      "Length",
      "Width"
    ],
    answer: "Depth",
  },
  {
    question: "Generic functions perform ______ operation for all the versions of a function except the data type differs",
    options: [
      "Different",
      "Same",
      "Similar",
      "None"
    ],
    answer: "Same",
  },
  {
    question: "Let N be an NFA with n states. Let k be the number of states of a minimal DFA which is equivalent to N. Which one of the following is necessarily true?",
    options: [
      "$K \\ge 2^{n}$",
      "$K \\ge n$",
      "$K \\le n^{2}$",
      "$K \\le 2^{n}$"
    ],
    answer: "$K \\le 2^{n}$",
  },
  {
    question: "State true or false.\ni) Unix, support multiple user processes but only support one thread per process.\nii) A java run time environment is an example of a system of one process with multiple threads.",
    options: [
      "a. True, False",
      "b. True, True",
      "c. False, True",
      "d. False, False"
    ],
    answer: "c. False, True",
  },
  {
    question: "Which of the following is/are the functions of the operating system?\ni) Sharing hardware among users. ii) Allowing users to share data among themselves.\niii) Recovering from errors. iv) Preventing users from interfering with one another.\nv) Scheduling resources among users.",
    options: [
      "i, ii, iii and iv only",
      "ii, iii, iv and v only",
      "i, iii, iv and v only",
      "All i, ii, iii, iv and v"
    ],
    answer: "All i, ii, iii, iv and v",
  },
  {
    question: "Medium term schedulers reduce the degree of multiprogramming by",
    options: [
      "Interrupt",
      "Swapping",
      "Terminating",
      "Thread"
    ],
    answer: "Swapping",
  },
  {
    question: "The number of comparisons required in the Linear search algorithm, if the search element is not present in the array,",
    options: [
      "n+1",
      "n",
      "(n+1)/2",
      "n-1"
    ],
    answer: "n",
  },
  {
    question: "What is the time complexity of the given function?\n`Function(){\n int i,j,k;\n for(i=n/2;i<=n;i++)\n  for(j=1;j<=n;j=2*j)\n   for(k=1;k<=n;k=k*2)\n    printf(\"Hello\");\n}`",
    options: [
      "$O(n^{*}(Log_{2}n)^{2})$",
      "$O(n^{*}(Log_{2}n))$",
      "$O(n^{2*}(Log_{2}n))$",
      "$O(n^{3})$"
    ],
    answer: "$O(n^{*}(Log_{2}n)^{2})$",
  },
  {
    question: "Participative management",
    options: [
      "Empower employees",
      "Collective decision making",
      "Both empower employees and collective decision making",
      "Neither empower employees nor collective decision making"
    ],
    answer: "Both empower employees and collective decision making",
  },
  {
    question: "Which of these statements is TRUE about a LAN?",
    options: [
      "A LAN connects computers in a small area such as an office",
      "A modem is needed to connect a computer to a LAN",
      "A LAN consists of only one computer",
      "Internet is a LAN"
    ],
    answer: "A LAN connects computers in a small area such as an office",
  },
  {
    question: "The statement \"computable functions can be identified with a class of partial recursive functions\" is from",
    options: [
      "Rice theorem",
      "Church-Turing thesis",
      "Parikh mapping theorem",
      "Pumping lemma"
    ],
    answer: "Church-Turing thesis",
  },
  {
    question: "Post systems is equivalent to",
    options: [
      "Turing machine",
      "Lambda calculus",
      "Godel incompleteness theorem",
      "All the choices"
    ],
    answer: "All the choices",
  },
  {
    question: "Context-sensitive languages (CSLs) are closed under\ni) Union ii) intersection\niii) complementation iv) cocatenation",
    options: [
      "(i) and (iii) only",
      "(ii) and (iv) only",
      "(i), (ii) and (iii) only",
      "(i), (ii), (iii) and (iv)"
    ],
    answer: "(i), (ii), (iii) and (iv)",
  },
  {
    question: "Assume page size as 2KB and a process is 72750 bytes in length. What is the size of the internal fragment?",
    options: [
      "878",
      "1078",
      "978",
      "1178"
    ],
    answer: "978",
  },
  {
    question: "How many principles of the Data Protection Act are there?",
    options: [
      "8",
      "5",
      "6",
      "7"
    ],
    answer: "8",
  },
  {
    question: "Consider that a page is 1KB in size and a process is 9485 bytes in length. What would be the number of valid entries in the corresponding page table?",
    options: [
      "8",
      "10",
      "9",
      "11"
    ],
    answer: "10",
  },
  {
    question: "To avoid the race condition, the number of processes that may be simultaneously inside their critical section is",
    options: [
      "8",
      "1",
      "16",
      "0"
    ],
    answer: "1",
  },
  {
    question: "What are the mid values in each level of recursion in the binary search for the input array {4, 8, 58,98,129,201 } and key 201?",
    options: [
      "58, 129, 201",
      "98, 129, 201",
      "98,201",
      "58,129,201"
    ],
    answer: "98, 129, 201",
  },
  {
    question: "In a Paging scheme with page sizes of 1K, given the logical address (2, 35) and the corresponding frame number in the page table as 4, what is the physical address mapped to the given logical address?",
    options: [
      "5131",
      "2030",
      "2083",
      "4131"
    ],
    answer: "4131",
  },
  {
    question: "Let the initial value of count be 5. What will be the final value of count if the instructions are executed in the following order: S1;T1;S2;T2;S3;T3.\nProcess P0: { S1: register1=count; S2: register1=register1 - 5; S3: count=register1; }\nProcess P1: { T1: register2=count; T2: register2=register2 X 5; T3: count=register2; }",
    options: [
      "50",
      "25",
      "0",
      "10"
    ],
    answer: "25",
  },
  {
    question: "What is the status of array after the first iteration of selection sort for the given array of elements:5,7,10,12,2,8",
    options: [
      "5,7,10,12,2,8",
      "2,5,10,12,7,8",
      "2,7,10,12,5,8",
      "5,7,10,2,8,12"
    ],
    answer: "2,7,10,12,5,8",
  },
  {
    question: "What is the status of the array after the first iteration of bubble sort for the given array of elements:5,7,10,12,2,8",
    options: [
      "5,7,10,12,2,8",
      "2,5,10,12,7,8",
      "2,7,10,12,5,8",
      "5,7,10,2,8,12"
    ],
    answer: "5,7,10,2,8,12",
  },
  {
    question: "What is the status of the array after the first iteration of insertion sort for the given array of elements:5,7,10,12,2,8",
    options: [
      "5,7,10,12,2,8",
      "2,5,10,12,7,8",
      "2,7,10,12,5,8",
      "5,7,10,2,8,12"
    ],
    answer: "5,7,10,12,2,8",
  },
  {
    question: "How many \"SCOPE\"s are printed?, how many \"SCOPE\"s are printed by only child processes?\n`int main()\n{\n if(fork() || fork())\n  fork();\n printf(\"SCOPE\");\n}`",
    options: [
      "5,2",
      "5,3",
      "5,4",
      "5,1"
    ],
    answer: "5,4",
  },
  {
    question: "How many \"SCOPE\"s are printed?, how many \"SCOPE\"s are printed by only child processes?\n`int main()\n{\n if(fork() && fork())\n  fork();\n printf(\"SCOPE\");\n}`",
    options: [
      "5,2",
      "5,3",
      "5,4",
      "5,1"
    ],
    answer: "5,1",
  },
  {
    question: "What is the output of the following C code?\n`void main() {\n struct books{\n  float st1;\n  char st2[6];\n }*ptr;\n printf(\"%d\",sizeof(ptr));\n}`",
    options: [
      "5",
      "6",
      "8",
      "4"
    ],
    answer: "4",
  },
  {
    question: "What is the output of the following C code?\n`void main() {\n struct books{\n  int pages;\n  char str[4];\n }b;\n printf(\"%d\",sizeof(b));\n}`",
    options: [
      "5",
      "6",
      "7",
      "8"
    ],
    answer: "8",
  },
  {
    question: "What is the level of recursion if the input array is { 4, 8, 32, 58,98,129,201 } and key is 8?",
    options: [
      "5",
      "2",
      "3",
      "4"
    ],
    answer: "3",
  },
  {
    question: "What will be the output?\n`#include<stdio.h>\nmain(){\n float a[]={1.23,2.34,3.45,4.56,5.67};\n printf(\"%d\",sizeof(a)/sizeof(a[-1]));\n}`",
    options: [
      "5",
      "1",
      "Error",
      "10"
    ],
    answer: "5",
  },
  {
    question: "What is the output of the following C code?\n`void main() {\n char fast, *faster, *fastest;\n printf(\"%d..%d\", sizeof(faster), sizeof(fastest));\n}`",
    options: [
      "4..2",
      "2..2",
      "4..4",
      "2..4"
    ],
    answer: "4..4",
  },
  {
    question: "The number of states in minimum DFA corresponding to the language $(00+10)^{*}100$ is",
    options: [
      "4",
      "3",
      "6",
      "5"
    ],
    answer: "5",
  },
  {
    question: "The total number of states required to automate the given regular expression $(aa)^{*}(bb)^{*}$",
    options: [
      "4",
      "3",
      "5",
      "7"
    ],
    answer: "5",
  },
  {
    question: "Consider the regular language $L=(111+11111)^{*}.$ The minimum number of states in any DFA accepting the language is",
    options: [
      "3",
      "5",
      "8",
      "9"
    ],
    answer: "9",
  },
  {
    question: "The number of states in a minimal deterministic finite automaton corresponding to the language $L=\\{a^{\\wedge}n| n>=4\\}$ is:",
    options: [
      "3",
      "4",
      "5",
      "6"
    ],
    answer: "5",
  },
  {
    question: "How many views of software can a UML diagram be represented",
    options: [
      "3",
      "4",
      "5",
      "6"
    ],
    answer: "5",
  },
  {
    question: "While applying Pumping lemma over a regular language, we consider a string w that belong to L and separate it into ______ components.",
    options: [
      "3",
      "4",
      "2",
      "5"
    ],
    answer: "3",
  },
  {
    question: "The sum of the degrees of all vertices in an undirected graph",
    options: [
      "2V",
      "|E|+1",
      "V+1",
      "2E"
    ],
    answer: "2E",
  },
  {
    question: "The number of states required by a Finite State Machine, to simulate the behaviour of a computer with a memory capable of storing 'm' words, each of length 'n' bits is?",
    options: [
      "$2^{\\wedge}(mn)$",
      "$2^{\\wedge}m + 2^{\\wedge}n$",
      "$m+n$",
      "2mn"
    ],
    answer: "$2^{\\wedge}(mn)$",
  },
  {
    question: "If a selection sort algorithm in the worst case is taking 20sec for processing an array of size 32. Which of the following is close to the maximum input size that can be solved in 5 minutes?",
    options: [
      "256",
      "512",
      "1024",
      "128"
    ],
    answer: "128",
  },
  {
    question: "Suppose that a system has a paging system with 8 entries in a page table. Given that there are three processes of equal sizes, creating 8 valid entries in their page tables. What would be the total number of frames allocated to these three processes under the condition that 2 pages are shared by the three processes?",
    options: [
      "24",
      "20",
      "18",
      "30"
    ],
    answer: "20",
  },
  {
    question: "Guess the output:\n`#include <stdio.h>\nmain(){\n int a=100;\n int b=200;\n int c[1][2][3]={&a};\n c[1][1][1]=&b;\n printf(\"%d\",c[1][1][1]);\n}`",
    options: [
      "200",
      "100",
      "Compiler Error / Undefined Behavior",
      "Garbage Value"
    ],
    answer: "Compiler Error / Undefined Behavior",
  },
  {
    question: "A process of verifying the validity of a claimed identity of a person is called?",
    options: [
      "Identification",
      "Authentication",
      "Authorization",
      "Accountability"
    ],
    answer: "Authentication",
  },
  {
    question: "Logical memory is broken into blocks of the same size called",
    options: [
      "frames",
      "pages",
      "backing store",
      "registers"
    ],
    answer: "pages",
  },
  {
    question: "The purpose of cache memory in a computer is to",
    options: [
      "ensure fast booting",
      "reduce load on CPU registers",
      "replace static memory",
      "speed up memory cycle time"
    ],
    answer: "speed up memory cycle time",
  },
  {
    question: "-------is not a good practice in order to enhance the security offered by password authentication?",
    options: [
      "Enabling account lockout controls",
      "Enforcing a reasonable password policy",
      "Using password verification tools and password cracking tools against your own password database file",
      "Allowing users to reuse the same password"
    ],
    answer: "Allowing users to reuse the same password",
  },
  {
    question: "The ______ access control model in which users are not given much freedom to decide who can access their files and is recognized for its structure and use of security labels?",
    options: [
      "Discretionary",
      "Mandatory",
      "Role-based",
      "Nondiscretionary"
    ],
    answer: "Mandatory",
  },
  {
    question: "A Block can be placed in a restricted set of places in the cache",
    options: [
      "Direct mapping",
      "set associative",
      "fully associative",
      "Indirect associative"
    ],
    answer: "set associative",
  },
  {
    question: "Which is more suitable (DFS or BFS) if the solution is closer to the starting node?",
    options: [
      "DFS",
      "BFS",
      "Both",
      "Neither"
    ],
    answer: "BFS",
  },
  {
    question: "which is the fastest storage unit in a usual memory hierarchy?",
    options: [
      "cache",
      "main memory",
      "hard disk memory",
      "register"
    ],
    answer: "register",
  },
  {
    question: "Hiding internal data from the outside world and accessing it only through publicly exposed methods is known as data",
    options: [
      "inheritance",
      "polymorphism",
      "abstraction",
      "encapsulation"
    ],
    answer: "encapsulation",
  },
  {
    question: "Which operator is used to insert the data into file?",
    options: [
      ">>",
      "<<",
      ">",
      "<"
    ],
    answer: "<<",
  },
  {
    question: "The project plan sets out",
    options: [
      "the resources available to the project",
      "the work breakdown",
      "a schedule for the work",
      "all the above"
    ],
    answer: "all the above",
  },
  {
    question: "In DFD the symbol used to refer the external entity",
    options: [
      "Rectangle",
      "Ellipse",
      "Diamond",
      "Circle"
    ],
    answer: "Rectangle",
  },
  {
    question: "The ability to temporarily halt the CPU and use this time to send information on buses is called",
    options: [
      "Direct memory access",
      "Vectoring the interrupt",
      "System Interrupt",
      "Cycle stealing"
    ],
    answer: "Cycle stealing",
  },
  {
    question: "A variable that derive ε is called.",
    options: [
      "ε",
      "@",
      "*",
      "Nullable"
    ],
    answer: "Nullable",
  },
  {
    question: "Context free languages are described by type--------- grammars",
    options: [
      "Type 1",
      "Type 2",
      "Type 3",
      "Type 4"
    ],
    answer: "Type 2",
  },
  {
    question: "Applying pumping lemma we can show that all languages are not regular",
    options: [
      "True",
      "False",
      "Sometimes True",
      "Sometimes False"
    ],
    answer: "True",
  },
  {
    question: "Every context free language is context sensitive language",
    options: [
      "True",
      "False",
      "nothing",
      "True and False"
    ],
    answer: "True",
  },
  {
    question: "A context free grammar is ambiguous if",
    options: [
      "the grammar contains useless non-terminals",
      "it produces more than one parse tree for the same sentence",
      "some production has two non-terminals side by side on the right-hand side",
      "None of the above"
    ],
    answer: "it produces more than one parse tree for the same sentence",
  },
  {
    question: "CFG's are........ of CSG",
    options: [
      "subset",
      "super set",
      "power set",
      "null"
    ],
    answer: "subset",
  },
  {
    question: "FORTRAN is a",
    options: [
      "regular language",
      "context free language",
      "context sensitive language",
      "None of the above"
    ],
    answer: "context free language",
  },
  {
    question: "______ language are the subset of context free languages.",
    options: [
      "regular grammar",
      "regular",
      "CNF",
      "GNF"
    ],
    answer: "regular",
  },
  {
    question: "......languages are used define the lexical structure of the programming language",
    options: [
      "Regular expression",
      "Regular Laguage",
      "Regular set",
      "C and B"
    ],
    answer: "Regular Laguage",
  },
  {
    question: "Every language defined by a FA is a ......Language",
    options: [
      "Regular",
      "irregular",
      "Regular set",
      "c and b"
    ],
    answer: "Regular",
  },
  {
    question: "Left linear grammars are ... of CFG",
    options: [
      "Power set",
      "Sub set",
      "Super set",
      "Nullable"
    ],
    answer: "Sub set",
  },
  {
    question: "A non terminal is useless if it is",
    options: [
      "Not derive any terminals",
      "derive terminal",
      "derive Non terminal",
      "Not reachable from start symbol or does not derive any terminal"
    ],
    answer: "Not reachable from start symbol or does not derive any terminal",
  },
  {
    question: "the intersection of a CFL and regular language",
    options: [
      "need not be regular",
      "need not be context free",
      "is always regular",
      "is always CFL"
    ],
    answer: "is always CFL",
  },
  {
    question: "Aliasing in the context free programming languages refer to",
    options: [
      "Multiple variables having the same memory location",
      "Multiple variables having the same memory value",
      "Multiple variables having the same memory identifier",
      "null"
    ],
    answer: "Multiple variables having the same memory location",
  },
  {
    question: "Any string of terminal that can be generated by the following CFG S-->XY, X-->aX/bX/a, Y-->Ya/Yb/a",
    options: [
      "has atleast one b",
      "should end in a 'a'",
      "has no recurring terminals",
      "has at least one 'a'"
    ],
    answer: "has at least one 'a'",
  },
  {
    question: "$L=\\{a^{n}b^{n}c^{n}/n=1,2,3...\\}$..... is an example of a language that is",
    options: [
      "Context free",
      "not context free",
      "not context free but whose complement is CF",
      "context free but whose complement is not CF"
    ],
    answer: "not context free",
  },
  {
    question: "Syntax of any high level language is defined with",
    options: [
      "CFG",
      "CNF",
      "GNF",
      "Regular Grammar"
    ],
    answer: "CFG",
  },
  {
    question: "PDA can recognise",
    options: [
      "any grammar",
      "only CFG",
      "only regular grammar",
      "any unambiguous grammar"
    ],
    answer: "only CFG",
  },
  {
    question: "For every ....grammar there is equivalent grammar for the same language which is .....",
    options: [
      "ambiguous grammar, un ambiguous grammar",
      "un ambiguous grammar, ambiguous grammar",
      "ambiguous grammar, ambiguous grammar",
      "un ambiguous grammar, un ambiguous grammar"
    ],
    answer: "ambiguous grammar, un ambiguous grammar",
  },
  {
    question: "If there is a unique LMD, the grammar is",
    options: [
      "ambiguous",
      "un ambiguous",
      "LLG",
      "RLG"
    ],
    answer: "un ambiguous",
  },
  {
    question: "if G is CFG and w is a string of lenth l in $L(G)$, how long is a derivation of w in G, if G is Chomsky normal form?",
    options: [
      "2l",
      "$2l+1$",
      "$2l-1$",
      "l"
    ],
    answer: "$2l-1$",
  },
  {
    question: "... is the machine to recognize the context sensitive languages",
    options: [
      "FA",
      "NFA",
      "Moore machine",
      "LBA"
    ],
    answer: "LBA",
  },
  {
    question: "Protocols in which the sender waits for a positive acknowledgment before advancing to the next data item are often called",
    options: [
      "ARQ",
      "PPR",
      "ARS",
      "PRS"
    ],
    answer: "ARQ",
  },
  {
    question: "A table is in second normal form if",
    options: [
      "It is in first normal form and has no partial key dependencies",
      "It is not having multivalued attributes",
      "It's partial composite key functionally determines an attribute",
      "None of the given options are true"
    ],
    answer: "It is in first normal form and has no partial key dependencies",
  },
  {
    question: "A Foreign Key Column",
    options: [
      "cannot hold null values",
      "can hold null or duplicate values",
      "can hold only duplicate values",
      "All the given options are wrong"
    ],
    answer: "can hold null or duplicate values",
  },
  {
    question: "A prime attribute is an attribute that is part of a",
    options: [
      "Primary Key",
      "Candidate Key",
      "Composite Key",
      "All the give options are correct"
    ],
    answer: "Candidate Key",
  },
  {
    question: "Consider the following schemas\nProduct(productid, productname, product_price, manufacturing_date, vendorId)\nVendor(vendorId, vendorname, location)\nThe SQL query to establish vendorid as the foreign key in the product table is",
    options: [
      "alter table product add constraint foreign key(vendorId) reference vendor(vendorId);",
      "alter table product add constraint product_vendorid_fr foreign key references vendor(vendorId);",
      "alter table vendor add constraint product_vendorid_fr foreign key(vendorId) reference vendor(vendorId);",
      "alter table product add constraint product_vendorid_fr foreign key(vendorId) references vendor (vendorId);"
    ],
    answer: "alter table product add constraint product_vendorid_fr foreign key(vendorId) references vendor (vendorId);",
  },
  {
    question: "In the ______ Protocol, the sender sends its frames one after another with no regard to the receiver.",
    options: [
      "Stop-and-Wait",
      "Simplest",
      "Go-Back-N ARQ",
      "Selective-Repeat ARQ"
    ],
    answer: "Simplest",
  },
  {
    question: "In the ______ Protocol, the sender sends one frame, stops until it receives confirmation from the receiver, and then sends the next frame.",
    options: [
      "Stop-and-Wait",
      "Simplest",
      "Go-Back-N ARQ",
      "Selective-Repeat ARQ"
    ],
    answer: "Stop-and-Wait",
  },
  {
    question: "Which error detection method uses one's complement arithmetic?",
    options: [
      "Simple parity check",
      "Checksum",
      "Two-dimensional parity check",
      "CRC"
    ],
    answer: "Checksum",
  },
  {
    question: "When 2 or more bits in a data unit has been changed during the transmission, the error is called",
    options: [
      "Random error",
      "Burst error",
      "Inverted error",
      "None of the mentioned"
    ],
    answer: "Burst error",
  },
  {
    question: "In a cyclic code, generator polynomial is actually the",
    options: [
      "Multiplier",
      "Divisor",
      "Polynomial",
      "Quotient"
    ],
    answer: "Divisor",
  },
  {
    question: "An error detecting code is which code is the remainder resulting from dividing the bits to be checked by a predetermined binary number, is known as",
    options: [
      "Cyclic redundancy check",
      "Checksum",
      "Error detecting code",
      "Hamming code"
    ],
    answer: "Cyclic redundancy check",
  },
  {
    question: "What is the minimum hamming distance of this coding scheme d (00000, 10011)?",
    options: [
      "1",
      "2",
      "3",
      "4"
    ],
    answer: "3",
  },
  {
    question: "What is the minimum hamming distance of this coding scheme d (01101,10011)?",
    options: [
      "1",
      "2",
      "3",
      "4"
    ],
    answer: "4",
  },
  {
    question: "Consider the following schemas\nProduct(productid, productname, product_price, manufacturing_date, vendorId)\nVendor(vendorId, vendorname, location)\nThe SQL query to establish vendorid as the primary key in the vendor table is",
    options: [
      "alter table vendor add constraint vendor_vendorid_pr primary key (vendorid);",
      "alter table vendor add constraint primary key (vendorid);",
      "alter table vendor add constraint vendor_vendorid_pr primary key;",
      "alter table vendor constraint vendor_vendorid_pr primary key (vendorid);"
    ],
    answer: "alter table vendor add constraint vendor_vendorid_pr primary key (vendorid);",
  },
  {
    question: "SELECT is referred to as a ______ operator",
    options: [
      "binary",
      "unary",
      "ternary",
      "all the above"
    ],
    answer: "unary",
  },
  {
    question: "______ combines all rows from two table",
    options: [
      "INTERSECT",
      "DIFFERENCE",
      "UNION",
      "none of the above"
    ],
    answer: "UNION",
  },
  {
    question: "The ______ operator provides a not function",
    options: [
      "difference",
      "intersection",
      "projection",
      "none of the above"
    ],
    answer: "difference",
  },
  {
    question: "A ______ is a tree data structure that corresponds to a relational algebra expression.",
    options: [
      "entree",
      "query tree",
      "sub-tree",
      "none of the above"
    ],
    answer: "query tree",
  },
  {
    question: "A ______ is a variable that holds a relation.",
    options: [
      "relvar",
      "table",
      "database",
      "none of the above"
    ],
    answer: "relvar",
  },
  {
    question: "______ takes place at execution time",
    options: [
      "Dynamic query optimization",
      "Non dynamic query optimization",
      "Static query optimization",
      "All the above"
    ],
    answer: "Dynamic query optimization",
  },
  {
    question: "A ______ uses sophisticated algorithms based on the rules of relational algebra and on the use of statistical information about the database to determine the best approach to execute a query.",
    options: [
      "role-based optimizer",
      "cost-based optimizer",
      "cast-based optimizer",
      "None of the above"
    ],
    answer: "cost-based optimizer",
  },
  {
    question: "______ consists of selecting a strategy from the many available for the execution of a query.",
    options: [
      "Global Query Optimization",
      "Query Mapping",
      "Local Query Optimization",
      "None of the above"
    ],
    answer: "Global Query Optimization",
  },
  {
    question: "Complex queries may have subexpressions repeated in different parts, thereby increasing the evaluation cost. Such optimization is known as",
    options: [
      "Multiquery optimization",
      "Universal Query Optimization",
      "Subquery optimization",
      "None of the above"
    ],
    answer: "Multiquery optimization",
  },
  {
    question: "The activity of choosing an efficient execution strategy for a query is called",
    options: [
      "Query processing",
      "Localization",
      "Procedural access",
      "Query optimization"
    ],
    answer: "Query optimization",
  },
  {
    question: "______ ensures that the data moves from one consistent state to another. The activity includes the synchronization of local and remote transactions across multiple distributed segments.",
    options: [
      "Concurrency control",
      "Transaction management",
      "Transformation",
      "Query optimization"
    ],
    answer: "Transaction management",
  },
  {
    question: "______ ensures that once transaction changes are done, they cannot be undone or lost, even in the event of a system failure.",
    options: [
      "Durability",
      "Consistency",
      "Atomicity",
      "None of the above"
    ],
    answer: "Durability",
  },
  {
    question: "A ______ statement is reached, in which case all changes are permanently applied to the database.",
    options: [
      "COMMIT",
      "ROLLBACK",
      "UPDATE",
      "None of the above"
    ],
    answer: "COMMIT",
  },
  {
    question: "The DBMS component that ensures atomicity and durability is",
    options: [
      "lock manager",
      "file manager",
      "recovery manager",
      "access manager"
    ],
    answer: "recovery manager",
  },
  {
    question: "In a DBMS transaction subsystem, ______ is responsible for moving data between disk storage and main memory.",
    options: [
      "buffer manager",
      "scheduler",
      "systems manager",
      "none of the above"
    ],
    answer: "buffer manager",
  },
  {
    question: "Which of the following statement is correct?",
    options: [
      "Any non-executable set of transactions is called a schedule.",
      "If we execute the transactions strictly one after another, the schedule is called a interleaved schedule.",
      "If there is an overlap of transaction execution, the schedule is called a interleaved schedule.",
      "It is the responsibility of both the transaction and the user to ensure consistency."
    ],
    answer: "If there is an overlap of transaction execution, the schedule is called a interleaved schedule.",
  }
];