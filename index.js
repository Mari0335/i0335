Rect n;
	n.x = 0;
	n.y = 0;
	n.width = width;
	n.height = height;

	usedRectangles.clear();

	freeRectangles.clear();
	freeRectangles.push_back(n);
}

Rect MaxRectsBinPack::Insert(int width, int height, FreeRectChoiceHeuristic method)
