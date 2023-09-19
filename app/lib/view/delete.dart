import 'package:flutter/material.dart';

class DelData extends StatelessWidget {
  const DelData({super.key});


  @override
  Widget build(BuildContext context){
    return AlertDialog(
      title: const Text('Warnning'),
      content: const Text('Are you sure you want to delete this User?'),
      actions: <Widget>[
        ElevatedButton(
          child: const Text('Yes'),
          onPressed: () => {
            Navigator.of(context).pop(true)
          }
           ),
        ElevatedButton(
          child: const Text('No'),
          onPressed: () => {
            Navigator.of(context).pop(false)
          }
           )
      ],
    );
  }
}