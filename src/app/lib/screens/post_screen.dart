import 'dart:convert';

import 'package:app/forum/test_comments.dart';
import 'package:app/utils/visual_pattern.dart';
import 'package:flutter/material.dart';
import 'package:app/forum/tags.dart';
import 'package:app/plantinstance/plant_info.dart';
import 'package:app/forum/comments.dart';
import 'package:app/base/header_sliver.dart';
import 'package:app/screens/reply_post_screen.dart';

class PostScreen extends StatefulWidget {
  final int id;
  const PostScreen(this.id, {Key? key}) : super(key: key);

  @override
  State<PostScreen> createState() => _PostScreenState();
}

class _PostScreenState extends State<PostScreen> {
  @override
  Widget build(BuildContext context) {
    CommentManager commentManager = CommentManager(context, 1);
    commentManager.loadComments(jsonDecode(rawJSON));
    return Scaffold(
      body: NestedScrollView(
        scrollDirection: Axis.vertical,
        scrollBehavior: const MaterialScrollBehavior(),
        headerSliverBuilder: StandardHeaderBuilder,
        body: Padding(
          padding: const EdgeInsets.all(10.0),
          child: ListView(
            children: [
              SizedBox(
                height: MediaQuery.of(context).size.height * 0.15,
                child:  Column(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceAround,
                        children: const [
                          Text("Question title", style: mainHeaderStyle),
                          Icon(Icons.question_answer, size: 40,)
                        ],
                      ),
                      SizedBox(
                        height: 40,
                        child: ListView.builder(
                          itemCount: 10,
                          scrollDirection: Axis.horizontal,
                          controller: ScrollController(),
                          itemBuilder: ((context, index) => tagItemBuilder(context, index))            
                        )
                      )
                    ]
                  ),
                ),
              const Padding(
                padding: EdgeInsets.all(10.0),
                child: Text("Question text", style: textStyle,)
              ),
              SizedBox(
                height: MediaQuery.of(context).size.height * 0.28,
                child: GridView(
                    scrollDirection: Axis.horizontal,
                    controller: ScrollController(),
                    gridDelegate: const SliverGridDelegateWithMaxCrossAxisExtent(
                      maxCrossAxisExtent: 200, 
                      childAspectRatio: 1, 
                      crossAxisSpacing: 20, 
                      mainAxisSpacing: 20,
                    ),
                    children: List<Widget>.generate(2, (int idx) => PlantInfoEmpty(idx, isSmall: true))
                  )
              ),
              SizedBox(
                height: MediaQuery.of(context).size.height * 0.15,
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    ElevatedButton(
                      onPressed: () {
                        Navigator.push(context,
                        MaterialPageRoute(builder: (context) => const ReplyPostScreen(1)));
                      },
                      style: buttonStyle,
                      child: const Text("Write a response...", style: buttonTextStyle)
                    )
                  ],
                )
              ),
              commentManager.getComments()
            ]
          )
        )
      )
    );
  }
}

SizedBox get spacer => const SizedBox(height: 20, width: 10); // TODO: Hacky, remove