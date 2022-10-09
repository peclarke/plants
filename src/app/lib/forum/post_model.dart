class PostInfoModel {
  int postID;       // Post ID in the DB
  int score;        // Reputation at the moment of the call
  int authorID;    // Who wrote the post
  String title;     // Post title
  String content;   // Post body - formatting
  DateTime created; // When the post was written

  List<dynamic> attachedPlants; // IDs of attached plants
  List<dynamic> tags;
  List<dynamic> comments;

  PostInfoModel.fromJSON(Map<String, dynamic> json)
      : authorID = json["userId"],
        postID = json["postId"],
        score = json["score"],
        title = json["title"],
        content = json["content"],
        created = DateTime.parse(json["created"]),
        //attachedPlants = (json["linkedPlants"] as List<dynamic>).map((e) => e as int).toList(),
        attachedPlants = json["linkedPlants"],
        tags = json["postTags"],
        comments = json["comments"];

  PostInfoModel(this.authorID, this.title, this.content)
      : postID = -1,
        score = 0,
        created = DateTime.now(),
        attachedPlants = [],
        tags = [],
        comments = [];
        
  String attachedPlantstoJson() {
    String plantJson = "[";
    for (var plant in attachedPlants) {
      plantJson += "${plant['plantId']},";
    }
    plantJson = plantJson.substring(0, plantJson.length - 1); // Trim the final comma
    return "]";
  }

  String getReadableTimeAgo() {
    Duration delta = DateTime.now().difference(created);
    if (delta.inMinutes < 60) {
      return "${delta.inMinutes} minutes";
    } else if (delta.inHours < 24) {
      return "${delta.inHours} hours";
    } else {
      return "${delta.inDays} days";
    }
  }
}