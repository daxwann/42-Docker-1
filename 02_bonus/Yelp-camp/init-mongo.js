db.createUser(
  {
    user: "bonus",
    pwd: "bonus",
    roles: [
      {
        role: "readWrite",
        db: "yelp_camp"
      }
    ]
  }
)