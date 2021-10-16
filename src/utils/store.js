const cards = [
  {
    id: "card-1",
    title: "Learning how to cook",
    tags: "Priority, something, etc",
  },
  {
    id: "card-2",
    title: "Making sandwich",
    tags: "",
  },
  {
    id: "card-3",
    title: "Taking the trash out",
    tags: "",
  },
];

const data = {
  lists: {
    "list-1": {
      id: "list-1",
      title: "Assigned",
      cards,
    },
    "list-2": {
      id: "list-2",
      title: "Doing",
      cards: [],
    },
  },
  listIds: ["list-1"],
};

export default data;
