export interface Project {
    name: String;
    fullname: String;
    homepage: String;
    url: String
};

export interface ProjectDetails {
    name?: String;
    homepage?: String;
    previews?: {
        directory: String;
        main: {
            path: String;
        }
        images: {
            src?: String;
            thumb?: String;
            path: String;
            title: String;
        }[];
    }
}